const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
        trim: true
    },
    fullName:{
        type: String,
        required: true,
        trim: true
    },
    phoneNumber:{
        type: String,
        required: true,
        trim: true
    },
    address:{
        type: String,
        required: true,
        trim: true
    },
    image:{
        type:Object,
        default:{
            public_id:'123123',
            url:'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png',
        },
    },
    

});

module.exports = mongoose.model('user',UserSchema);