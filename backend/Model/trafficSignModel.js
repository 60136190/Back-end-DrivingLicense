const mongoose = require('mongoose');

const TrafficSignSchema = new mongoose.Schema({
    name:{
     type: String,
     required: true,   
    },
    code:{
        type:String,
        required:true,
    },
    description:{
        type: String,
    },
    image:{
        public_id:{type: String, required: true,trim: true},
        url: { type: String, required: true, trim: true},
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorySign",
        required: true,
    }
    
},
);

module.exports = mongoose.model('trafficSign',TrafficSignSchema);