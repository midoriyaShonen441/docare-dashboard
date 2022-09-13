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
app.post("/syncemergency", async (req, res) => {

    const emergency_info = require("./model/emergency_info");
    const userInfo = require("./model/user_info");

    const userData = await userInfo.find({});
    const emergencyData = req.body;
    const caseId = emergencyData.case_info.locateable_id

    let ordinal_user = userData.length;

    try{
        await emergency_info.create(emergencyData);
    }catch(err){
        console.log(`error in api syncemergency: ${err}`);
        res.sendStatus(500);    
    }

    while(ordinal_user -- ){

        const citizen_id = userData[ordinal_user].user.citizen_id;

        for(let i = 0; i <=  emergencyData.user_ids.length; i ++){

            const emer_citizen_id = emergencyData.user_ids[i];

            if(citizen_id === emer_citizen_id){
                console.log(citizen_id, " === ", emer_citizen_id);

                emergencyData.floor_plan.Zones.forEach( async (element) => {
                    if(element.zone_id === caseId){
                        const payload = {
                            case_confirm: false,
                            fullname: userData[ordinal_user].user.fullname,
                            gender: userData[ordinal_user].user.gender,
                            blood_type: userData[ordinal_user].user.blood_type,
                            height:userData[ordinal_user].user.height,
                            weight: userData[ordinal_user].user.weight,
                            allergies: userData[ordinal_user].user.allergies,
                            conditions:  userData[ordinal_user].user.conditions,
                            drugs: userData[ordinal_user].user.drugs,
                            mobile: userData[ordinal_user].user.contact.mobile,
                            address_1: userData[ordinal_user].user.contact.address_1,
                            address_2: userData[ordinal_user].user.contact.address_2,
                            subdistrict: userData[ordinal_user].user.contact.subdistrict,
                            district: userData[ordinal_user].user.contact.district,
                            province: userData[ordinal_user].user.contact.province,
                            zip: userData[ordinal_user].user.contact.zip,
                            stay_latitude: userData[ordinal_user].user.contact.latitude,
                            stay_longitude: userData[ordinal_user].user.contact.longitude,
                            family: userData[ordinal_user].user.family,
                            
                            emer_id: emergencyData.case_info.locateable_id,
                            emer_latitude: emergencyData.case_info.latitude,
                            emer_longitude: emergencyData.case_info.longitude,

                            zone_id: element.zone_id,
                            zone_name: element.name,
                            zone_ordinal: element.zone_ordinal,

                            building_id: null,
                            building_name:null,
                            building_ordinal:null,

                            case_in_floor: null,
                            floor_id: null,
                            floor_name: null,
                            floor_ordinal: null,
                            
                            room_id:null,
                            room_name:null,
                            room_ordinal:null,

                            count_zone: element.length,
                            count_buildig: null,
                            count_floor: null,
                            count_room: null,

                            timestamp: emergencyData.case_info.timestamp,
                        }

                        try{
                            await emergency_report.create(payload);
                            res.send(payload);
                        }catch(err){
                            console.log(`error in api syncemergency in loop emergencyData.floor_plan.Zones.forEach ${err}`);
                            res.sendStatus(500);
                        }
                    }

                    element.Buildings.forEach( async (item1) => {
                        
                        if(item1.zone_id === caseId){

                            const payload = {

                                case_confirm: false,
                                fullname: userData[ordinal_user].user.fullname,
                                gender: userData[ordinal_user].user.gender,
                                blood_type: userData[ordinal_user].user.blood_type,
                                height:userData[ordinal_user].user.height,
                                weight: userData[ordinal_user].user.weight,
                                allergies: userData[ordinal_user].user.allergies,
                                conditions:  userData[ordinal_user].user.conditions,
                                drugs: userData[ordinal_user].user.drugs,
                                mobile: userData[ordinal_user].user.contact.mobile,
                                address_1: userData[ordinal_user].user.contact.address_1,
                                address_2: userData[ordinal_user].user.contact.address_2,
                                subdistrict: userData[ordinal_user].user.contact.subdistrict,
                                district: userData[ordinal_user].user.contact.district,
                                province: userData[ordinal_user].user.contact.province,
                                zip: userData[ordinal_user].user.contact.zip,
                                stay_latitude: userData[ordinal_user].user.contact.latitude,
                                stay_longitude: userData[ordinal_user].user.contact.longitude,
                                family: userData[ordinal_user].user.family,
                                
                                emer_id: emergencyData.case_info.locateable_id,
                                emer_latitude: emergencyData.case_info.latitude,
                                emer_longitude: emergencyData.case_info.longitude,

                                zone_id: element.zone_id,
                                zone_name: element.name,
                                zone_ordinal: element.zone_ordinal,

                                building_id: item1.building_id,
                                building_name:item1.building_name,
                                building_ordinal:item1.building_ordinal,
                                
                                case_in_floor: null,
                                floor_id: null,
                                floor_name: null,
                                floor_ordinal: null,
                                
                                room_id:null,
                                room_name:null,
                                room_ordinal:null,

                                count_zone: element.length,
                                count_buildig: item1.length,
                                count_floor: null,
                                count_room: null,

                                timestamp: emergencyData.case_info.timestamp,
                            }
                            try{
                                await emergency_report.create(payload);
                                res.send(payload);
                            }catch(err){
                                console.log(`error in api syncemergency in loop element.Buildings.forEach( async (item1) ${err}`);
                                res.sendStatus(500);
                            }
                        }

                        let case_is_floor = 0
                        item1.Floors.forEach( async (item2) => {
                            case_is_floor += 1;
                            if(item2.floor_id === caseId){

                                const payload = {
                                    case_confirm: false,
                                    fullname: userData[ordinal_user].user.fullname,
                                    gender: userData[ordinal_user].user.gender,
                                    blood_type: userData[ordinal_user].user.blood_type,
                                    height:userData[ordinal_user].user.height,
                                    weight: userData[ordinal_user].user.weight,
                                    allergies: userData[ordinal_user].user.allergies,
                                    conditions:  userData[ordinal_user].user.conditions,
                                    drugs: userData[ordinal_user].user.drugs,
                                    mobile: userData[ordinal_user].user.contact.mobile,
                                    address_1: userData[ordinal_user].user.contact.address_1,
                                    address_2: userData[ordinal_user].user.contact.address_2,
                                    subdistrict: userData[ordinal_user].user.contact.subdistrict,
                                    district: userData[ordinal_user].user.contact.district,
                                    province: userData[ordinal_user].user.contact.province,
                                    zip: userData[ordinal_user].user.contact.zip,
                                    stay_latitude: userData[ordinal_user].user.contact.latitude,
                                    stay_longitude: userData[ordinal_user].user.contact.longitude,
                                    family: userData[ordinal_user].user.family,
                                    
                                    emer_id: emergencyData.case_info.locateable_id,
                                    emer_latitude: emergencyData.case_info.latitude,
                                    emer_longitude: emergencyData.case_info.longitude,
    
                                    zone_id: element.zone_id,
                                    zone_name: element.name,
                                    zone_ordinal: element.zone_ordinal,

                                    building_id: item1.building_id,
                                    building_name:item1.building_name,
                                    building_ordinal:item1.building_ordinal,
                                    
                                    case_in_floor: case_in_floor,
                                    floor_id: item2.floor_id,
                                    floor_name: item2.floor_name,
                                    floor_ordinal: item2.floor_ordinal,
                                    
                                    room_id:null,
                                    room_name:null,
                                    room_ordinal:null,
    
                                    count_zone: element.length,
                                    count_buildig: item1.length,
                                    count_floor: item2.length,
                                    count_room: null,
    
                                    timestamp: emergencyData.case_info.timestamp,
                                }
                                try{
                                    await emergency_report.create(payload);
                                    res.send(payload);
                                }catch(err){
                                    console.log(`error in api syncemergency in loop item1.Floors.forEach( async (item2) ${err}`);
                                    res.sendStatus(500);
                                }
                            }
                            item2.Rooms.forEach( async (item3) => {

                                if(item3.room_id === caseId){
                                    const payload = {
                                        case_confirm: false,
                                        fullname: userData[ordinal_user].user.fullname,
                                        gender: userData[ordinal_user].user.gender,
                                        blood_type: userData[ordinal_user].user.blood_type,
                                        height:userData[ordinal_user].user.height,
                                        weight: userData[ordinal_user].user.weight,
                                        allergies: userData[ordinal_user].user.allergies,
                                        conditions:  userData[ordinal_user].user.conditions,
                                        drugs: userData[ordinal_user].user.drugs,
                                        mobile: userData[ordinal_user].user.contact.mobile,
                                        address_1: userData[ordinal_user].user.contact.address_1,
                                        address_2: userData[ordinal_user].user.contact.address_2,
                                        subdistrict: userData[ordinal_user].user.contact.subdistrict,
                                        district: userData[ordinal_user].user.contact.district,
                                        province: userData[ordinal_user].user.contact.province,
                                        zip: userData[ordinal_user].user.contact.zip,
                                        stay_latitude: userData[ordinal_user].user.contact.latitude,
                                        stay_longitude: userData[ordinal_user].user.contact.longitude,
                                        family: userData[ordinal_user].user.family,
                                        
                                        emer_id: emergencyData.case_info.locateable_id,
                                        emer_latitude: emergencyData.case_info.latitude,
                                        emer_longitude: emergencyData.case_info.longitude,

                                        zone_id: element.zone_id,
                                        zone_name: element.name,
                                        zone_ordinal: element.zone_ordinal,

                                        building_id: item1.building_id,
                                        building_name:item1.building_name,
                                        building_ordinal:item1.building_ordinal,
                                        
                                        floor_id: item2.floor_id,
                                        floor_name: item2.floor_name,
                                        floor_ordinal: item2.floor_ordinal,
                                        case_in_floor: case_is_floor,
                                        room_id:item3.room_id,
                                        room_name:item3.room_name,
                                        room_ordinal:item3.room_ordinal,
                                        count_zone: emergencyData.floor_plan.Zones.length,
                                        count_buildig: element.Buildings.length,
                                        count_floor: item1.Floors.length,
                                        count_room: item2.Rooms.length,
                                        timestamp: emergencyData.case_info.timestamp,
                                    }

                                    try{
                                        await emergency_report.create(payload);
                                        res.send(payload);
                                    }catch(err){
                                        console.log(`error in api syncemergency in loop item2.Rooms.forEach( async (item3) ${err}`);
                                        res.sendStatus(500);
                                    }
                                }

                            })
                        })
                    })
                });
            }
        }
    }
});

// get alert emergency info // 
app.get("/alertemergency", async (req, res) => {
    const emergency_info = require("./model/emergency_info");
    const userInfo = require("./model/user_info");

    try{
        const emerInfo = await emergency_info.find({case_confirm: false});
        const userData = await userInfo.find({});

        console.log(emerInfo)
        
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