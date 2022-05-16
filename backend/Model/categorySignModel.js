const mongoose = require('mongoose');

const CategorySignSchema = new mongoose.Schema({
    name:{
     type: String,
     required: true,   
    },  
    image:{
        public_id:{type: String, required: true,trim: true},
        url: { type: String, required: true, trim: true},
    },  
},
);

module.exports = mongoose.model('categorySign',CategorySignSchema);