const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const device_info = new Schema(
    {
        user_ids: {type: Array, require: true},
        device: {type: Array},
        case_confirm: {type: Boolean}
    },
    { timestamps: true }
);

module.exports = mongoose.model("device_info", device_info);