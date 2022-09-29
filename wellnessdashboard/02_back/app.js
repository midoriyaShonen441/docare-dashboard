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

app.get("/", (req, res) => {
    res.send("OK");
})

////////////////////////////////////////////////////////////
////////////////// User Info API ///////////////////////////
////////////////////////////////////////////////////////////

////////////////// wellnesss start ///////////////////////////

// sync user wellness // 
app.post("/syncUser", async(req, res) => {
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

// app.get("/getPatients", async(req, res) => {
//     const 
// });

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