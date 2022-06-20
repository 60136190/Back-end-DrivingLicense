const mongoose = require('mongoose');

const LawSchema = new mongoose.Schema({
    title:{
     type: String,
     required: true,   
    },
    penalty:{
        type: String,
     required: true,   
    },
    image:{
        public_id:{type: String,trim: true},
        url: { type: String, trim: true},
    },
    description:{
        type: String,  
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "categoryLawCar",
        required: true,
    },
    
},
);

module.exports = mongoose.model('law',LawSchema);