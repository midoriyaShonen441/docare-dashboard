// using .env //
require("dotenv").config();

// conn to database //
const db = require("./connection/connection");

// lib import //
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

// config server //
const app = express();
const corsOptions = {
  origin: ["http://localhost:7777", "https://wellness.silvercare.io"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
db.connect();

////////////////////////////////////////////////////////////
//                      Test Debug                        //
////////////////////////////////////////////////////////////

app.get("/", (req, res) => {
  res.send("OK");
});

////////////////////////////////////////////////////////////
//                                                        //
//                      Test Debug                        //
//                                                        //
////////////////////////////////////////////////////////////

//
app.get("/getUser", async (req, res) => {
  const userInfo = require("./model/user_info");
  try {
    const users = await userInfo.find();
    res.send(users);
  } catch (err) {
    res.send(err);
  }
});

// sync user wellness //
app.post("/syncUser", async (req, res) => {
  const payload = req.body;
  const userInfo = require("./model/user_info");

  try {
    userAvailable = await userInfo.findOne({
      "user.citizen_id": payload.user.citizen_id,
    });
    if (userAvailable) {
      res.sendStatus(200);
      console.log("Profile already create");
    } else {
      await userInfo.create(payload);

      res.sendStatus(200);
      console.log("Sync Profile OK");
    }
  } catch (err) {
    res.send(err);
  }
});

app.get("/getPatients", async (req, res) => {
  const userInfo = require("./model/user_info");
  try {
    patientAvailable = await userInfo.findOne({
      "user.domain_id": payload.domain_id,
    });
    if (patientAvailable) {
      patients = await userInfo.find({
        "user.domain_id": payload.domain_id,
      });
      res.send(patients);
    } else {
      res.send(null);
    }
  } catch (err) {
    res.send(err);
  }
});

// vitalSign api
app.post("/vitalSign", async (req, res) => {
  const payload = req.body;
  const vital_info = require("./model/vital_info");

  try {
    await vital_info.create(payload);
    res.sendStatus(200);
  } catch (err) {
    console.log(`error in api /vitalSign: ${err}`);
    res.sendStatus(500);
  }
});

////////////////// wellnesss end ///////////////////////////
module.exports = app;
