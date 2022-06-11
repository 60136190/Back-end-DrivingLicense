const mongoose = require('mongoose');

const TrickSchema = new mongoose.Schema({
    title:{
     type: String,
     required: true,   
    },
    content:{
     type: String,
     required: true,  
    }
    
},
);

module.exports = mongoose.model('trick',TrickSchema);