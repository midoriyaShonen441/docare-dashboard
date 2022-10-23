const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const emergency_info = new Schema({

        user_ids:[ String ],
        device:{
            id: { type: String },
            name: { type: String},
            type: { type: String },
            mobile: { type: String },
        },
        case_info:{
            locateable_id: { type: String },
            locateable_type: { type: String },
            latitude: { type: Number },
            longitude: { type: Number },
            timestamp: { type: Number },
        },
        floor_plan:{
            Zones: {type: Array, required: true }
        },
        case_confirm: {type: Boolean, required: true},
        get_alert_time: Date,
        acknowledge_time: Date,
        incident_confirm_time: Date

})

module.exports = mongoose.model("emergency_info", emergency_info);