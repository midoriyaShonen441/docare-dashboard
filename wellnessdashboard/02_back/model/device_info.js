const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const device_info = new Schema(
    {
        user: {
            citizen_id: { type: String, required: true }
        },
        device: {
            device_id: { type: String, required: true },
            device_name: String,
            device_type: String,
            device_mobile: String,
        }

    },
    { timestamps: true }
)

module.exports = mongoose.Model("device_info")