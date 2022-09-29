const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vital_info = new Schema(
    {   
        user_id: {type: String, required:true},
        device:{
            id: {type:String},
            name:{type:String},
            type:{type:String},
            mobile:{type:String},
        },  
        vitals: {type: Array}
    }
)

module.exports = mongoose.model("vital_info", vital_info)
