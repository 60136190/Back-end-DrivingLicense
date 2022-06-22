const mongoose = require('mongoose');

const LearnSchema = new mongoose.Schema({
    question:{
     type: String,
     required: true,   
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "categoryLearn",
        required: true,
    },
    image:{
        public_id:{type: String,trim: true},
        url: { type: String, trim: true},
    },
    answer:[
        {
            true:{
                type: String,
                required: true,
            },
            title:{
                type: String,
                required:true,
            },
            idQuestion:{
                type: String,
                ref: "learn",
            }
        }
    ]
    
},
);

module.exports = mongoose.model('learn',LearnSchema);