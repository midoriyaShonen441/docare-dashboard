// using .env //
require("dotenv").config();

// conn to database //
const db = require("./connection/connection");

// lib import //
const express = require("express");
const cors = require("cors");
const json2csv = require("json2csv").parse;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");

// import model schema //

// config server //
const app = express();
app.use(cors());
app.use(express.json());

db.connect();
// get env //
const saltRounds = process.env.SALTROUNDS;
const rounds = parseInt(saltRounds);

// ////////////////// For Deploy ////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////// safey start ///////////////////////////
// app.get("/backend/testing", (req, res) => {
//     res.send("OK");
// })

// /// sync user data in collection user info //
// app.post("/backend/syncUser", async(req, res) => {

//     const payload = req.body;
//     const userInfo = require("./model/user_info");

//     try {
//         userAvialable = await userInfo.findOne(
//             { "user.citizen_id": payload.user.citizen_id }
//         );
//         if (userAvialable) {
//             res.sendStatus(200);
//             console.log("Profile already create");
//         } else {
//             await userInfo.create(payload);
//             res.sendStatus(200);
//         };
//     } catch (err) {
//         res.send(err);
//     };
// });

// /// sync user data in collection user info //
// app.post("/backend/updateBatch", async(req, res) => {
//     const users = req.body.users;
//     const userInfo = require("./model/user_info");

//     try {
//         users.forEach(async (value) => {
//             await userInfo.findOneAndUpdate(
//                 { "user.citizen_id": value.citizen_id },
//                 { user: value }
//             );
//         });
//         res.sendStatus(200);
//     } catch (err) {
//         res.send(err);
//     };
// });

// app.delete("/backend/deleteUser", async(req, res) => {
//     const userIds = req.body.user_ids;
//     const userInfo = require("./model/user_info");
//     // console.log(userIds);

//     try {
//         userIds.forEach(async (value) => {
//             await userInfo.findOneAndDelete(
//                 { "user.citizen_id": value }
//             );
//         });
//         res.sendStatus(200);
//     } catch (err) {
//         res.send(err);
//     };
// });
// //////// management emergency info ////////

// // sync device //
// app.post("/backend/syncDevice", async (req, res) => {
//     const deviceData = req.body;

// });

// // sync emergency if user login dashbboard //

// app.get("/backend/syncEmergencyLog", auth, async (req, res) => {

//     // import database //
//     const emergency_info = require("./model/emergency_info");
//     // import function //
//     const SendingEmergencyModule = require("./customFunction/recursiveModule");
//     const {domain_id} = req.authData.decode
//     // console.log("domain_id" , domain_id)
//     try{
//         const emergencyReport = await emergency_info.aggregate([
//             // {$match:{case_confirm: false}},
//             {$lookup: {
//                 from: "user_infos",
//                 localField: "user_ids",
//                 foreignField: "user.citizen_id",
//                 as: "user_profile"
//             }},
//             {$unwind: "$user_profile"},
//             {$project: {
//                 "user_ids":1,
//                 "device":1,
//                 "case_info":1,
//                 "floor_plan":1,
//                 "case_confirm":1,
//                 user_profile:["$user_profile"],
//                 "tenan": "$user_profile.user.domain_id"
//             }},
//             {$match: {tenan: domain_id,case_confirm: false}}
//         ])

//         // console.log("emergencyReport ==> ", emergencyReport)
//         const emergencyModel = new SendingEmergencyModule(emergencyReport, domain_id);
//         const sentEmergency = emergencyModel.returnResult();

//         // console.log(sentEmergency);
//         res.send(sentEmergency);
//     }catch(err){
//         console.log(`error in api syncEmergencyLog ==> ${err}`);
//         res.sendStatus(500);
//     }

// });

// // sync emergency if user btn sos //
// app.post("/backend/syncEmergencysos", async (req, res) => {
//     // import database //
//     const emergency_info = require("./model/emergency_info");
//     const device_info = require("./model/device_info");
//     // import function //
//     const SendingEmergencyModule = require("./customFunction/recursiveModule");
//     let emergencyData = req.body;
//     if(emergencyData){
//         emergencyData["case_confirm"] = false;
//         const devicePayload = {
//             user_ids: emergencyData.user_ids,
//             device: emergencyData.device,
//             case_confirm: false
//         }
//         try{
//             await emergency_info.create(emergencyData);
//             await device_info.create(devicePayload)
//         }catch(err){
//             console.log(`error in api syncemergency emergency_info : ${err}`);
//             res.sendStatus(500);
//         }
//     }

//     try{
//         const emergencyReport = await emergency_info.aggregate([
//             {$match: {case_confirm: false}},
//             {$lookup: {
//                 from: "user_infos",
//                 localField: "user_ids",
//                 foreignField: "user.citizen_id",
//                 as: "user_profile"
//             }}
//         ])
//         const emergencyModel = new SendingEmergencyModule(emergencyReport);
//         const sentEmergency = emergencyModel.returnResult();
//         console.log(sentEmergency);
//         res.send(sentEmergency);
//     }catch(err){
//         console.log(`error in api syncemergency: emergencyReport ==> ${err}`);
//         res.sendStatus(500);
//     }
// });

// // get alert emergency info //
// app.get("/backend/alertemergency", async (req, res) => {
//     const emergency_info = require("./model/emergency_info");
//     try{
//         const emerInfo = await emergency_info.find({case_confirm: false});
//         console.log(emerInfo);
//         const payload = {
//             userInfo:"",
//             emerInfo:"",
//         }
//         res.send(payload);
//     }catch(err){
//         console.log(`error in api alertemergency: ${err}`);
//         res.sendFile(500);
//     }
// });

// //  if staff confirm emergency   //
// app.put("/backend/confirmemergency", async (req, res) => {
//     const { isConfirm, _id } = req.body;
//     const emergency_info = require("./model/emergency_info");

//     const setQuery = {
//         _id: _id
//     }

//     try{
//         await emergency_info.updateOne(setQuery,{case_confirm:isConfirm});
//         res.sendStatus(200);
//     }catch(err){
//         console.log(`error in api confirmemergency: ${err}`);
//         res.sendStatus(500);
//     }
// })

// //////// end management emergency info ////////

// app.get("/backend/getuser", auth,async(req, res) => {
//     const userInfo = require("./model/user_info");
//     const dateTimeConvert = require("./customFunction/datetimeConvert");
//     const {domain_id} = req.authData.decode
//     // console.log("domain_id ", domain_id)
//     try {
//         const userAvialable = await userInfo.aggregate([
//             {$lookup: {
//                 from: "device_infos",
//                 localField: "user.citizen_id",
//                 foreignField: "user_ids",
//                 as: "device_data"
//             }},
//             {$unwind:"$device_data"},
//             {$lookup: {
//                 from:"emergency_infos",
//                 localField: "user.citizen_id",
//                 foreignField: "user_ids",
//                 as: "emergency_data"
//             }},
//             {$unwind:"$emergency_data"},
//             {$project:{
//                 "user":1,
//                 device_data: '$device_data.device',
//                 emergency_data: '$emergency_data.case_info',
//                 case_confirm: '$emergency_data.case_confirm',
//                 timestamp: "$emergency_data.case_info.timestamp",
//                 tenan:"$user.domain_id",
//             }},
//             {$match: {tenan: domain_id}}
//         ]);
//         // console.log("userAvialable ==> ", userAvialable)
//         const genStringDate = new dateTimeConvert(userAvialable);
//         const setStringDate = genStringDate.convertTimesStamp();
//         res.send(setStringDate);
//     } catch (err) {
//         const payload = {
//             status: 500,
//             text:err
//         }
//         console.log(`error in API /backend/getuser ${err}`)
//         res.send(payload);
//     };
// })

// // vitalSign api
// app.post("/backend/vitalsign", async(req, res) => {
//     const payload = req.body;
//     const vital_info = require("./model/vital_info");
//     try{
//         await vital_info.create(payload);
//         res.sendStatus(200);
//     }catch(err){
//         console.log(`error in api /wellness/vitalsign: ${err}`)
//         res.sendStatus(500)
//     }
// });

// app.post("/backend/download",  async (req, res) => {
//     const dataIn = req.body;
//     let setJson = [];
//     for(let i = 0; i < dataIn.length; i++){
//         const jsonDat = {
//             citizen_id: dataIn[i].user.citizen_id,
//             domain_id: dataIn[i].user.domain_id,
//             fullname: dataIn[i].user.fullname,
//             gender: dataIn[i].user.gender,
//             blood_type: dataIn[i].user.blood_type,
//             height: dataIn[i].user.height,
//             weight: dataIn[i].user.weight,
//             allergies: dataIn[i].user.allergies,
//             drugs: dataIn[i].user.drugs,
//             conditions:  dataIn[i].user.conditions,
//             mobile: dataIn[i].user.contact.mobile,
//             address_1: dataIn[i].user.contact.address_1,
//             address_2: dataIn[i].user.contact.address_2,
//             subdistrict: dataIn[i].user.contact.subdistrict,
//             district: dataIn[i].user.contact.district,
//             province: dataIn[i].user.contact.province,
//             zip: dataIn[i].user.contact.zip,
//             note: dataIn[i].user.contact.note,
//             family: dataIn[i].user.family,
//             user_hold_device: dataIn[i].device_data.user_ids,
//             device: dataIn[i].device_data.device,
//             emergency_localtion_id: dataIn[i].emergency_data.locateable_id,
//             emergency_localtion_type: dataIn[i].emergency_data.locateable_type,
//             emergency_localtion_lat: dataIn[i].emergency_data.latitude,
//             emergency_localtion_lng: dataIn[i].emergency_data.longitude,
//             emergency_timestamp: dataIn[i].emergency_data.timestamp,
//             case_confirm:  dataIn[i].case_confirm,
//         }
//         setJson.push(jsonDat)
//     }
//     const csvString = json2csv(setJson);
//     res.setHeader('Content-disposition', 'attachment; filename=shifts-report.csv');
//     res.set('Content-Type', 'text/csv');
//     res.status(200).send(csvString);
// });

// app.post("/backend/sync/staff", async (req, res) => {
//     const staff_info = require("./model/staff_info");
//     const staffData = req.body;
//     const payload = {
//         user:{
//             citizen_id: staffData.user.citizen_id,
//             domain_id: staffData.user.domain_id,
//             username: staffData.user.username,
//             password: staffData.user.password,
//             password_dashboard: "",
//             fullname: staffData.user.fullname,
//             role: staffData.user.role,
//             gender: staffData.user.gender,
//             dob: staffData.user.dob,
//             blood_type: staffData.user.blood_type,
//             height: staffData.user.height,
//             weight: staffData.user.weight,
//             allergies: staffData.user.allergies,
//             conditions: staffData.user.conditions,
//             drugs: staffData.user.drugs,
//             vital_signs: staffData.user.vital_signs,
//             contact:  staffData.user.contact,
//             family: staffData.user.family,
//         },
//         online_status: false
//     }
//     try{
//         await staff_info.create(payload);
//         res.sendStatus(200);
//     }catch(err){
//         console.log(`error in API /backend/sync/staff ${err}`);
//         const payload = {
//             status: 500
//         }
//         res.sendStatus(500).send(payload);
//     }
// });

// app.get("/backend/staffinfo", auth, async (req, res) => {
//     const staff_info = require("./model/staff_info");
//     const {domain_id} =  req.authData.decode;
//     try{
//         const userProfile = await staff_info.find({"user.domain_id":domain_id });
//         res.send(userProfile);
//     }catch(err){
//         console.log(`error in API staffinfo ${err}`);
//         const payload = {
//             status: 500,
//             data: err
//         }
//         res.sendStatus(500).send(payload);
//     }
// });

// app.delete("/backend/delete/staff", auth, async (req, res) => {
//     const staff_info = require("./model/staff_info");
//     const {role} =  req.authData.decode;
//     const {id} = req.body;
//     if(role === 'Admin'){
//         await staff_info.deleteOne({"user.citizen_id": id});
//         const payload = {
//             status: 200,
//             data: "delete success!"
//         }
//         res.sendStatus(200).send(payload);
//     }else{
//         const payload = {
//             status: 401,
//             data: "unauthorized"
//         }
//         res.sendStatus(401).send(payload)
//     }
// });

// app.put("/backend/update/staff", auth, async (req, res) => {
//     const staff_info = require("./model/staff_info");
//     const {query, user} = req.body;
//     const {role} =  req.authData.decode;
//     if(role === 'Admin'){
//         const isQuery = {
//             user:{
//                 citizen_id: query
//             }
//         }
//         const updatePayload = {
//             user:user
//         }
//         try{
//             await staff_info.updateOne(isQuery, updatePayload);
//         }catch(err){
//             console.log(`error in API /backend/update/staff ${err}`);
//             const payload = {
//                 status:  500,
//                 data: err
//             }
//             res.sendStatus(500).send(payload);
//         }
//     }else{
//         const payload = {
//             status: 401,
//             data: "unauthorized"
//         }
//         res.sendStatus(401).send(payload)
//     }
// });

// app.put("/backend/genpassword", async (req, res) => {
//     const {username,password} = req.body;
//     const staff_info = require("./model/staff_info");
//     if(password){
//         try{
//             const hashPassword = await bcrypt.hashSync(password, rounds);
//             await staff_info.updateOne({"user.username": username}, {"user.password_dashboard": hashPassword});
//             res.sendStatus(200);
//         }catch(err){
//             const payload = {
//                 status: 401,
//                 data: "we not found this user make sure you are using username same as slivercare platform"
//             }
//             res.sendStatus(401).send(payload);
//         }
//     }else{
//         const payload = {
//             status: 401,
//             data: "password must not be empty"
//         }
//         res.sendStatus(400).send(payload);
//     }
// });

// app.post("/backend/login", async (req, res) => {
//     const {username, password} = req.body;
//     const staff_info = require("./model/staff_info");
//     if(username){
//         try{
//             const isUsername = await staff_info.findOne({"user.username": username});
//             // console.log(isUsername)
//             if(isUsername && bcrypt.compare(password, isUsername.user.password_dashboard)){
//                 const genToken = jwt.sign(
//                     {
//                         _id: isUsername._id,
//                         username: isUsername.user.username,
//                         domain_id: isUsername.user.domain_id,
//                         role: isUsername.user.role
//                     },
//                     process.env.TOKEN_KEY,
//                     {expiresIn: process.env.EXPIRES}
//                 )
//                 const payload = {
//                     status:200,
//                     token: genToken,
//                     role: isUsername.user.role,
//                     username: isUsername.user.username
//                 }
//                 res.send(payload)
//             }else{
//                 console.log(`2 try set error in API /backend/login ${err}`);
//                 const payload = {
//                     status: 401,
//                     data: "invalid username or password"
//                 }
//                 res.sendStatus(401).send(payload);
//             }
//         }catch(err){
//             console.log(`1 error in API /backend/login ${err}`);
//             const payload = {
//                 status: 401,
//                 data: "invalid username!"
//             }
//             res.send(payload);
//         }
//     }else{
//         const payload = {
//             status: 401,
//             data: "username must not be empty"
//         }
//         res.sendStatus(401).send(payload);
//     }
// });

/////////////////// For Local //////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/backend/testing", (req, res) => {
  res.send("OK");
});

/// sync user data in collection user info //
app.post("/backend/syncUser", async (req, res) => {
  const payload = req.body;
  const userInfo = require("./model/user_info");

  try {
    userAvialable = await userInfo.findOne({
      "user.citizen_id": payload.user.citizen_id,
    });
    if (userAvialable) {
      res.sendStatus(200);
      console.log("Profile already create");
    } else {
      await userInfo.create(payload);
      res.sendStatus(200);
    }
  } catch (err) {
    res.send(err);
  }
});

/// sync user data in collection user info //
app.post("/backend/updateBatch", async (req, res) => {
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
  }
});

app.delete("/backend/deleteUser", async (req, res) => {
  const { id } = req.body.user_ids;
  const userInfo = require("./model/user_info");
  try {
    await userInfo.findOneAndDelete({ "user.citizen_id": id });
    res.sendStatus(200);
  } catch (err) {
    const payload = {
      status: 500,
      text: err,
    };
    res.send(payload);
  }
});
//////// management emergency info ////////

// sync device //
// app.post("/backend/syncDevice", async (req, res) => {
//     const deviceData = req.body;

// });

// sync emergency if user login dashbboard //

app.get("/backend/syncEmergencyLog", auth, async (req, res) => {
  // import database //
  const emergency_info = require("./model/emergency_info");
  // import function //
  const SendingEmergencyModule = require("./customFunction/recursiveModule");
  const { domain_id } = req.authData.decode;
  // console.log("domain_id" , domain_id)
  try {
    const emergencyReport = await emergency_info.aggregate([
      // {$match:{case_confirm: false}},
      {
        $lookup: {
          from: "user_infos",
          localField: "user_ids",
          foreignField: "user.citizen_id",
          as: "user_profile",
        },
      },
      { $unwind: "$user_profile" },
      {
        $project: {
          user_ids: 1,
          device: 1,
          case_info: 1,
          floor_plan: 1,
          case_confirm: 1,
          user_profile: ["$user_profile"],
          tenan: "$user_profile.user.domain_id",
        },
      },
      { $match: { tenan: domain_id, case_confirm: false } },
    ]);

    // console.log("emergencyReport ==> ", emergencyReport)
    const emergencyModel = new SendingEmergencyModule(
      emergencyReport,
      domain_id
    );
    const sentEmergency = emergencyModel.returnResult();

    const payload = {
      status: 200,
      data: sentEmergency,
    };
    console.log("sentEmergency ==> ", sentEmergency);
    res.send(payload);
  } catch (err) {
    console.log(`error in api syncEmergencyLog ==> ${err}`);
    res.sendStatus(500);
  }
});

// sync emergency if user btn sos //
app.post("/backend/syncEmergencysos", async (req, res) => {
  // import database //
  const emergency_info = require("./model/emergency_info");
  const device_info = require("./model/device_info");
  // import function //
  const SendingEmergencyModule = require("./customFunction/recursiveModule");
  let emergencyData = req.body;
  if (emergencyData) {
    emergencyData["case_confirm"] = false;
    emergencyData["get_alert_time"] = new Date();
    const devicePayload = {
      user_ids: emergencyData.user_ids,
      device: emergencyData.device,
      case_confirm: false,
    };
    try {
      await emergency_info.create(emergencyData);
      await device_info.create(devicePayload);
    } catch (err) {
      console.log(`error in api syncemergency emergency_info : ${err}`);
      res.sendStatus(500);
    }
  }

  try {
    const emergencyReport = await emergency_info.aggregate([
      { $match: { case_confirm: false } },
      {
        $lookup: {
          from: "user_infos",
          localField: "user_ids",
          foreignField: "user.citizen_id",
          as: "user_profile",
        },
      },
    ]);
    const emergencyModel = new SendingEmergencyModule(emergencyReport);
    console.log(emergencyModel);
    const sentEmergency = emergencyModel.returnResult();
    console.log(sentEmergency);
    res.send(sentEmergency);
  } catch (err) {
    console.log(`error in api syncemergency: emergencyReport ==> ${err}`);
    res.sendStatus(500);
  }
});

// get alert emergency info //
app.get("/backend/alertemergency", async (req, res) => {
  const emergency_info = require("./model/emergency_info");
  try {
    const emerInfo = await emergency_info.find({ case_confirm: false });
    console.log(emerInfo);
    const payload = {
      userInfo: "",
      emerInfo: "",
    };
    res.send(payload);
  } catch (err) {
    console.log(`error in api alertemergency: ${err}`);
    res.sendFile(500);
  }
});

//  if staff confirm emergency   //
app.put("/backend/confirmemergency", async (req, res) => {
  const { _id, case_confirm } = req.body;
  const emergency_info = require("./model/emergency_info");

  try {
    await emergency_info.updateOne(
      { user_ids: _id, case_confirm: false },
      { case_confirm: case_confirm, incident_confirm_time: new Date() }
    );
    res.status(200).send({ message: "OK" });
  } catch (err) {
    console.log(`error in api confirmEmergency: ${err}`);
    res.status(500).send({ message: err });
  }
});

//////// end management emergency info ////////

app.get("/backend/getuser", auth, async (req, res) => {
  const userInfo = require("./model/user_info");
  const dateTimeConvert = require("./customFunction/datetimeConvert");
  const { domain_id } = req.authData.decode;
  console.log("domain_id ", domain_id);
  try {
    const userAvialable = await userInfo.aggregate([
      {
        $lookup: {
          from: "device_infos",
          localField: "user.citizen_id",
          foreignField: "user_ids",
          as: "device_data",
        },
      },
      { $unwind: "$device_data" },
      {
        $lookup: {
          from: "emergency_infos",
          localField: "user.citizen_id",
          foreignField: "user_ids",
          as: "emergency_data",
        },
      },
      { $unwind: "$emergency_data" },
      {
        $project: {
          user: 1,
          device_data: "$device_data.device",
          emergency_data: "$emergency_data.case_info",
          case_confirm: "$emergency_data.case_confirm",
          timestamp: "$emergency_data.case_info.timestamp",
          tenan: "$user.domain_id",
        },
      },
      { $match: { tenan: domain_id } },
    ]);
    console.log("userAvialable ==> ", userAvialable);
    const genStringDate = new dateTimeConvert(userAvialable);
    const setStringDate = genStringDate.convertTimesStamp();
    const payload = {
      status: 200,
      data: setStringDate,
    };
    res.send(payload);
  } catch (err) {
    const payload = {
      status: 500,
      text: err,
    };
    console.log(`error in API /backend/getuser ${err}`);
    res.send(payload);
  }
});

// vitalSign api
app.post("/backend/vitalsign", async (req, res) => {
  const payload = req.body;
  const vital_info = require("./model/vital_info");
  try {
    await vital_info.create(payload);
    res.sendStatus(200);
  } catch (err) {
    console.log(`error in api /wellness/vitalsign: ${err}`);
    res.sendStatus(500);
  }
});

app.post("/backend/download", async (req, res) => {
  const dataIn = req.body;
  let setJson = [];
  for (let i = 0; i < dataIn.length; i++) {
    const jsonDat = {
      citizen_id: dataIn[i].user.citizen_id,
      domain_id: dataIn[i].user.domain_id,
      fullname: dataIn[i].user.fullname,
      gender: dataIn[i].user.gender,
      blood_type: dataIn[i].user.blood_type,
      height: dataIn[i].user.height,
      weight: dataIn[i].user.weight,
      allergies: dataIn[i].user.allergies,
      drugs: dataIn[i].user.drugs,
      conditions: dataIn[i].user.conditions,
      mobile: dataIn[i].user.contact.mobile,
      address_1: dataIn[i].user.contact.address_1,
      address_2: dataIn[i].user.contact.address_2,
      subdistrict: dataIn[i].user.contact.subdistrict,
      district: dataIn[i].user.contact.district,
      province: dataIn[i].user.contact.province,
      zip: dataIn[i].user.contact.zip,
      note: dataIn[i].user.contact.note,
      family: dataIn[i].user.family,
      user_hold_device: dataIn[i].device_data.user_ids,
      device: dataIn[i].device_data.device,
      emergency_localtion_id: dataIn[i].emergency_data.locateable_id,
      emergency_localtion_type: dataIn[i].emergency_data.locateable_type,
      emergency_localtion_lat: dataIn[i].emergency_data.latitude,
      emergency_localtion_lng: dataIn[i].emergency_data.longitude,
      emergency_timestamp: dataIn[i].emergency_data.timestamp,
      case_confirm: dataIn[i].case_confirm,
    };
    setJson.push(jsonDat);
  }
  const csvString = json2csv(setJson);
  res.setHeader(
    "Content-disposition",
    "attachment; filename=shifts-report.csv"
  );
  res.set("Content-Type", "text/csv");
  res.status(200).send(csvString);
});

app.get("/backend/staffinfo", auth, async (req, res) => {
  const staff_info = require("./model/staff_info");
  const { domain_id } = req.authData.decode;
  try {
    const userProfile = await staff_info.find({ "user.domain_id": domain_id });
    const payload = {
      status: 200,
      data: userProfile,
    };
    res.send(payload);
  } catch (err) {
    console.log(`error in API staffinfo ${err}`);
    const payload = {
      status: 500,
      text: err,
    };
    res.sendStatus(500).send(payload);
  }
});

app.post("/backend/sync/staff", async (req, res) => {
  const staff_info = require("./model/staff_info");
  const staffData = req.body;
  const hashPassword = await bcrypt.hashSync(staffData.user.password, rounds);
  const payload = {
    user: {
      citizen_id: staffData.user.citizen_id,
      domain_id: staffData.user.domain_id,
      username: staffData.user.username,
      password: hashPassword,
      // password_dashboard: "",
      fullname: staffData.user.fullname,
      role: staffData.user.role,
      gender: staffData.user.gender,
      dob: staffData.user.dob,
      blood_type: staffData.user.blood_type,
      height: staffData.user.height,
      weight: staffData.user.weight,
      allergies: staffData.user.allergies,
      conditions: staffData.user.conditions,
      drugs: staffData.user.drugs,
      vital_signs: staffData.user.vital_signs,
      contact: staffData.user.contact,
      family: staffData.user.family,
    },
  };
  try {
    await staff_info.create(payload);
    res.sendStatus(200);
  } catch (err) {
    console.log(`error in API /backend/sync/staff ${err}`);
    const payload = {
      status: 500,
    };
    res.sendStatus(500).send(payload);
  }
});

app.delete("/backend/delete/staff", auth, async (req, res) => {
  const staff_info = require("./model/staff_info");
  const { role } = req.authData.decode;
  const { id } = req.body;
  if (role === "Admin") {
    try {
      await staff_info.deleteOne({ "user.citizen_id": id });
      res.sendStatus(200);
    } catch (err) {
      const payload = {
        status: 500,
        text: err,
      };
      res.send(payload);
    }
  } else {
    const payload = {
      status: 401,
      text: "unauthorized",
    };
    res.send(payload);
  }
});

app.put("/backend/update/staff", auth, async (req, res) => {
  const staff_info = require("./model/staff_info");
  const { query, user } = req.body;
  const { role } = req.authData.decode;
  if (role === "Admin") {
    const isQuery = {
      user: {
        citizen_id: query,
      },
    };
    const updatePayload = {
      user: user,
    };
    try {
      await staff_info.updateOne(isQuery, updatePayload);
      res.sendStatus(200);
    } catch (err) {
      console.log(`error in API /backend/update/staff ${err}`);
      const payload = {
        status: 500,
        text: err,
      };
      res.sendStatus(500).send(payload);
    }
  } else {
    const payload = {
      status: 401,
      text: "unauthorized",
    };
    res.sendStatus(401).send(payload);
  }
});

app.put("/backend/genpassword", async (req, res) => {
  const { username, password } = req.body;
  const staff_info = require("./model/staff_info");
  if (password) {
    try {
      const hashPassword = await bcrypt.hashSync(password, rounds);
      await staff_info.updateOne(
        { "user.username": username },
        { "user.password": hashPassword }
      );
      res.sendStatus(200);
    } catch (err) {
      const payload = {
        status: 401,
        text: "we not found this user make sure you are using username same as slivercare platform",
      };
      res.sendStatus(401).send(payload);
    }
  } else {
    const payload = {
      status: 401,
      text: "password must not be empty",
    };
    res.sendStatus(400).send(payload);
  }
});

app.post("/backend/login", async (req, res) => {
  const { username, password } = req.body;
  const staff_info = require("./model/staff_info");
  if (username) {
    try {
      const isUsername = await staff_info.findOne({
        "user.username": username,
      });
      // console.log(isUsername)
      if (isUsername && bcrypt.compare(password, isUsername.user.password)) {
        const genToken = jwt.sign(
          {
            _id: isUsername._id,
            username: isUsername.user.username,
            domain_id: isUsername.user.domain_id,
            role: isUsername.user.role,
          },
          process.env.TOKEN_KEY,
          { expiresIn: process.env.EXPIRES }
        );
        const payload = {
          status: 200,
          token: genToken,
          username: isUsername.user.username,
        };
        res.send(payload);
      } else {
        console.log(`2 try set error in API /backend/login ${err}`);
        const payload = {
          status: 401,
          data: "invalid username or password",
        };
        res.sendStatus(401).send(payload);
      }
    } catch (err) {
      console.log(`1 error in API /backend/login ${err}`);
      const payload = {
        status: 401,
        data: "invalid username!",
      };
      res.send(payload);
    }
  } else {
    const payload = {
      status: 401,
      data: "username must not be empty",
    };
    res.sendStatus(401).send(payload);
  }
});

app.get("/backend/generate/:id", async (req, res) => {
  const emergency_info = require("./model/emergency_info");
  const mongoose = require("mongoose");
  const id = req.params.id;
  // console.log("emergency_info ==> ",id)
  // const ids = String(id)
  try {
    const emergencyReport = await emergency_info.aggregate([
      {
        $lookup: {
          from: "user_infos",
          localField: "user_ids",
          foreignField: "user.citizen_id",
          as: "user_profile",
        },
      },
      { $unwind: "$user_profile" },
      {
        $project: {
          _id: 1,
          user_ids: 1,
          case_info: 1,
          case_confirm: 1,
          fullname: "$user_profile.user.fullname",
          citizen_id: "$user_profile.user.citizen_id",
          blood_type: "$user_profile.user.blood_type",
          gender: "$user_profile.user.gender",
          mobile: "$user_profile.user.contact.mobile",
          family: "$user_profile.user.family",
          address_1: "$user_profile.user.contact.address_1",
          address_2: "$user_profile.user.contact.address_2",
          district: "$user_profile.user.contact.district",
          province: "$user_profile.user.contact.province",
          subdistrict: "$user_profile.user.contact.subdistrict",
          zip: "$user_profile.user.contact.zip",
          allergies: "$user_profile.user.allergies",
          conditions: "$user_profile.user.conditions",
          drugs: "$user_profile.user.drugs",
        },
      },
      { $match: { _id: mongoose.Types.ObjectId(id), case_confirm: false } },
    ]);
    // console.log(emergencyReport)
    res.send(emergencyReport);
  } catch (err) {
    const payload = {
      status: 500,
      text: err,
    };
    res.send(payload);
  }
});

module.exports = app;
