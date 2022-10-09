// using .env //
require("dotenv").config();

// conn to database //
const db = require("./connection/connection");

// lib import //
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const config = require("./config/auth.config");

// config server //
const app = express();
const corsOptions = {
  origin: ["http://localhost:7777", "https://wellness.silvercare.io"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
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

////////////////////////////////////////////////////////////
//                                                        //
//                      Dashboard API                     //
//                                                        //
////////////////////////////////////////////////////////////

//                get all patients in domain             //
app.get("/api/staff/dashboard/getPatients", async (req, res) => {
  const userInfo = require("./model/user_info");

  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.domain_id = decoded.domain_id;
  });

  await userInfo
    .find({
      "user.domain_id": req.domain_id,
      "user.role": "User",
    })
    .exec((err, users) => {
      if (err) {
        res.status(500).send({ message: err });
      }
      res.status(200).send(users);
    });
});

//                get all staffs in domain             //
app.get("/api/staff/dashboard/getStaffs", async (req, res) => {
  const userInfo = require("./model/user_info");

  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.domain_id = decoded.domain_id;
  });

  await userInfo
    .find({
      "user.domain_id": req.domain_id,
      "user.role": ["Master", "Admin", "Manager", "Staff"],
    })
    .exec((err, users) => {
      if (err) {
        res.status(500).send({ message: err });
      }
      res.status(200).send(users);
    });
});

app.delete("/api/staff/dashboard/removeStaff", async (req, res) => {
  const userInfo = require("./model/user_info");
  const username = req.body.username;
  console.log(username)
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.domain_id = decoded.domain_id;
  });

  await userInfo
    .findOneAndDelete({
      "user.username": username,
    })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
      }
      res.status(200).send({ message: `"${user.user.username}" is deleted`});
    });
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
