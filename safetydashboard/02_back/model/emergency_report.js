const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const emergency_report = new Schema({

    case_confirm: {type: Boolean, required: true},
    fullname: {type: String},
    gender: {type: String},
    blood_type: {type: String},
    height: {type: String},
    weight: {type: String},
    allergies: {type:Array},
    conditions: {type: Array},
    drugs: {type: Array},
    mobile: {type: String},
    address_1: {type: String},
    address_2: {type: String},
    subdistrict: {type: String},
    district: {type: String},
    province: {type: String},
    zip: {type: String},
    stay_latitude: {type: String},
    stay_longitude: {type: String},
    family: {type: Array},
    
    emer_id: {type: String},
    emer_latitude: {type: String},
    emer_longitude: {type: String},

    zone_id: {type: Number},
    zone_name: {type:String},
    zone_ordinal: {type: Number},

    building_id: {type: Number},
    building_name: {type: String},
    building_ordinal: {type: Number},

    case_in_floor: {type:Number},
    floor_id: {type: Number},
    floor_name: {type: String},
    floor_ordinal: {type: Number},

    room_id: {type: Number},
    room_name: {type: String},
    room_ordinal: {type: Number},
    
    count_zone: {type:Number},
    count_buildig: {type:Number},
    count_floor: {type:Number},
    count_room: {type:Number},
    timestamp: {type: Number}
})

module.exports = mongoose.model("emergency_report", emergency_report);