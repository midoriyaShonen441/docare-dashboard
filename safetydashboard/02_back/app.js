// using .env // 
require("dotenv").config();

// conn to database //
const db = require("./connection/connection");

// lib import //
const express = require("express");
const cors = require("cors");

// import model schema //
const emergency_report = require("./model/emergency_report");

// config server // 
const app = express();
app.use(cors());
app.use(express.json());

db.connect();

////////////////////////////////////////////////////////////
////////////////// Test Debug //////////////////////////////
////////////////////////////////////////////////////////////

app.get("/backend/", (req, res) => {
    res.send("OK");
})

////////////////////////////////////////////////////////////
////////////////// User Info API ///////////////////////////
////////////////////////////////////////////////////////////


////////////////// safey start ///////////////////////////

/// sync user data in collection user info //
app.post("/backend/syncUser", async(req, res) => {

    const payload = req.body;
    const userInfo = require("./model/user_info");

    try {
        userAvialable = await userInfo.findOne(
            { "user.citizen_id": payload.user.citizen_id }
        );
        if (userAvialable) {
            res.sendStatus(200);
            console.log("Profile already create");
        } else {
            await userInfo.create(payload);

            res.sendStatus(200);
            console.log("Sync Profile OK");
        };
    } catch (err) {
        res.send(err);
    };
});

/// sync user data in collection user info //
app.post("/backend/updateBatch", async(req, res) => {
    const users = req.body.users;
    const userInfo = require("./model/user_info");

    try {
        users.forEach(async (value) => {
            await userInfo.findOneAndUpdate(
                { "user.citizen_id": value.citizen_id },
                { user: value }
            );
        });
        res.sendStatus(200);
    } catch (err) {
        res.send(err);
    };
});

app.delete("/backend/deleteUser", async(req, res) => {
    const userIds = req.body.user_ids;
    const userInfo = require("./model/user_info");
    console.log(userIds);

    try {
        userIds.forEach(async (value) => {
            await userInfo.findOneAndDelete(
                { "user.citizen_id": value }
            );
        });
        res.sendStatus(200);
    } catch (err) {
        res.send(err);
    };
});
//////// management emergency info //////// 

// sync emergency if user login dashbboard //

app.get("/backend/syncEmergencyLog", async (req, res) => {

    // import database // 
    const emergency_info = require("./model/emergency_info");
    // import function //
    const SendingEmergencyModule = require("./customFunction/recursiveModule");

    try{
        const emergencyReport = await emergency_info.aggregate([
            {$match: {case_confirm: false}},
            {$lookup: {
                from: "user_infos",
                localField: "user_ids",
                foreignField: "user.citizen_id",
                as: "user_profile"
            }}
        ])

        // console.log("emergencyReport ==> ", emergencyReport)
        const emergencyModel = new SendingEmergencyModule(emergencyReport);
        const sentEmergency = emergencyModel.returnResult();
        // console.log(sentEmergency);
        res.send(sentEmergency);
    }catch(err){
        console.log(`error in api syncEmergencyLog ==> ${err}`);
        res.sendStatus(500);
    }

});

// sync emergency if user btn sos //
app.post("/backend/syncEmergencysos", async (req, res) => {

    // import database // 
    const emergency_info = require("./model/emergency_info");
    // import function //
    const SendingEmergencyModule = require("./customFunction/recursiveModule");
    let emergencyData = req.body;

    if(emergencyData){
        emergencyData["case_confirm"] = false;
        try{
            await emergency_info.create(emergencyData);
        }catch(err){
            console.log(`error in api syncemergency emergency_info : ${err}`);
            res.sendStatus(500);    
        }
    }

    try{
        const emergencyReport = await emergency_info.aggregate([
            {$match: {case_confirm: false}},
            {$lookup: {
                from: "user_infos",
                localField: "user_ids",
                foreignField: "user.citizen_id",
                as: "user_profile"
            }}
        ])
        const emergencyModel = new SendingEmergencyModule(emergencyReport);
        const sentEmergency = emergencyModel.returnResult();
        res.send(sentEmergency);
    }catch(err){
        console.log(`error in api syncemergency: emergencyReport ==> ${err}`);
        res.sendStatus(500);
    }
});

// get alert emergency info // 
app.get("/backend/alertemergency", async (req, res) => {
    const emergency_info = require("./model/emergency_info");
    const userInfo = require("./model/user_info");

    try{
        const emerInfo = await emergency_info.find({case_confirm: false});
        console.log(emerInfo);
        const payload = {
            userInfo:"",
            emerInfo:"",
        }
        res.send(payload);
    }catch(err){
        console.log(`error in api alertemergency: ${err}`);
        res.sendFile(500);
    }
});

//  if staff confirm emergency   //
app.put("/backend/confirmemergency", async (req, res) => {
    const { isConfirm, _id } = req.body; 
    const emergency_info = require("./model/emergency_info");

    const setQuery = {
        _id: _id
    }

    try{
        await emergency_info.updateOne(setQuery,{case_confirm:isConfirm});
        res.sendStatus(200);
    }catch(err){
        console.log(`error in api confirmemergency: ${err}`);
        res.sendStatus(500);
    }
})

//////// end management emergency info //////// 

////////////////// safey end ///////////////////////////
////////////////// wellnesss start ///////////////////////////

// sync user wellness // 
app.post("/backend/wellness/syncuser", async(req, res) => {
    const payload = req.body;
    const userInfo = require("./model/wel_user_info");

    try {
        userAvialable = await userInfo.findOne(
            { "user.citizen_id": payload.user.citizen_id }
        );
        if (userAvialable) {
            res.sendStatus(200);
            console.log("Profile already create");
        } else {
            await userInfo.create(payload);

            res.sendStatus(200);
            console.log("Sync Profile OK");
        };
    } catch (err) {
        res.send(err);
    };
});



// app.get("/backend/wellness/getuser", async(req, res) => {
//     const userInfo = require("./model/wel_user_info");

//     try{a}
// })

// vitalSign api
app.post("/backend/wellness/vitalsign", async(req, res) => {
    const payload = req.body;
    const vital_info = require("./model/vital_info");
 
    try{
        await vital_info.create(payload);
        res.sendStatus(200);
    }catch(err){   
        console.log(`error in api /wellness/vitalsign: ${err}`)
        res.sendStatus(500)
    }
});


////////////////// wellnesss end ///////////////////////////
module.exports = app;