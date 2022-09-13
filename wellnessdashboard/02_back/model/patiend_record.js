const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patiend_record = new Schema(
    {   
        user_id: {type: String, required:true},
        fullname:String,
        age:String,
        pulse: String,
        bp: String,
        temp: String,
        oxygen: String,
        glucose: String,
        weight: String,
        note: String
    },
    { timestamps: true }    
)

module.exports = mongoose.model("patiend_record", patiend_record)
