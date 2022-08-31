const mongoose = require("mongoose");
const db = require("./connection/connection");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

db.connect();

////////////////////////////////////////////////////////////
////////////////// Test Debug //////////////////////////////
////////////////////////////////////////////////////////////

app.get("/", (req, res) => {
    res.send("OK");
})

////////////////////////////////////////////////////////////
////////////////// User Info API ///////////////////////////
////////////////////////////////////////////////////////////


////////////////// safey start ///////////////////////////

/// sync user data in collection user info //
app.post("/syncuser", async(req, res) => {
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
app.post("/updateBatch", async(req, res) => {
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



app.delete("/deleteUser", async(req, res) => {
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

// sync emergency if user btn sos //
app.post("/syncemergency", async(req, res) => {

    const emergency_info = require("./model/emergency_info");
    const userInfo = require("./model/user_info");
    const emergencyData = req.body;

    // console.log("emergencyData ==>", emergencyData)

    const setData = {
        case_confirm: false,
        data:emergencyData
    }

    // console.log("setData", setData)

    try{
        await emergency_info.create(setData);
        res.sendStatus(200);
    }catch(err){
        console.log(`error in api syncemergency: ${err}`);
        res.sendStatus(500);    
    }
});

// get alert emergency info // 
app.get("/alertemergency", async (req, res) => {
    const emergency_info = require("./model/emergency_info");
    const userInfo = require("./model/user_info");

    try{
        const emerInfo = await emergency_info.find({});
        // const userData = await userInfo.find({});

        // emerInfo.user_ids.forEach((element) => {
            
        // });


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
app.put("/confirmemergency", async (req, res) => {
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
app.post("/wellness/syncuser", async(req, res) => {
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



// app.get("/wellness/getuser", async(req, res) => {
//     const userInfo = require("./model/wel_user_info");

//     try{a}
// })

// vitalSign api
app.post("/wellness/vitalsign", async(req, res) => {
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