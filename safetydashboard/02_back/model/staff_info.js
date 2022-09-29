const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//  API model for 1 and 2 // 

const staff_info = new Schema(
    {   user: {
            citizen_id: { type:  String, required: true},
            domain_id:{ type:  String, required: true},
            username: String,
            password: String,
            password_dashboard: String,
            fullname: String,
            role: String,
            gender:String,
            dob: Date,
            blood_type: String,
            height: Number,
            weight: Number,
            allergies: {type: Array},
            conditions: {type: Array},
            drugs: {type: Array},
            vital_signs: {type: Array},
            contact: {
                mobile: String,
                address_1: String, 
                address_2: String,
                subdistrict: String,
                district: String,
                province: String,
                zip: String,
                note: String,
                latitude: String,
                longitude: String
            },
            family : {type: Array},  
        },
        online_status: {type: Boolean},
    },
    { timestamps: true }
)

module.exports = mongoose.model("staff_info", staff_info);