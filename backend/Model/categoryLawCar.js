const mongoose = require('mongoose');

const CategoryLawCarSchema = new mongoose.Schema({
    name:{
     type: String,
     required: true,   
    },
    image:{
        public_id:{type: String,trim: true},
        url: { type: String, trim: true},
    }

},
);

module.exports = mongoose.model('categoryLawCar',CategoryLawCarSchema);