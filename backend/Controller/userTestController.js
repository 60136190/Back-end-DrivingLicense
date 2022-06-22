const UserTests = require('../Model/userTestModel.js');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const path = require('path');
var Cryptr = require('cryptr');
cryptr = new Cryptr('devnami');
require('dotenv').config();
var Cryptr = require('cryptr');
cryptr = new Cryptr('devnami');


const UserTestCtrl = {

    // create new account
    async RegisterTest(req, res) {
        try {
            // crate variable email and password
            const { fullName, phoneNumber, address, email, password } = req.body;
            const user = await UserTests.findOne({ email });

            if (user)
                return res.json({
                    status: 400,
                    msg: 'Email is already exits',
                });

            if (password.length < 6)
                return res.json({
                    status: 400,
                    msg: 'Your password is not enough 8 characters'
                });

    //kiểm tra format password
      let reg = new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
      ).test(password);
      if (!reg) {
        return res.json({
          status: 400,
          success: false,
          msg: "Password must contain at least one number and one uppercase and lowercase and special letter, and at least 6 or more characters ",
        });
      }

            // Password Ecryption
            const passwordHash = await bcrypt.hash(password, 10)
            const fullNameHash = await cryptr.encrypt(fullName)
            const newUser = new UserTests({
                fullName: fullNameHash,
                phoneNumber: phoneNumber,
                address: address,
                email: email,
                password: passwordHash,
            });

            // truy  vấn vào database
            await newUser.save()


            // // Then create jsonwebtoken to authentication
            // const accesstoken = createAccessToken({ id: newUser._id});
            // const refreshtoken = createRefreshToken({ id: newUser._id});

            // res.cookie('refreshtoken', refreshtoken, {
            //     httpOnly: true,
            //     path: '/api/auth/customer/refresh_token',
            //     maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
            // });
            return res.json({
                status: 200,
                // accesstoken : accesstoken,   
                msg: 'Register successfully',
                id: newUser.id,
            });

        } catch (error) {
            return res.json({
                status: 400,
                msg: 'Register failed',
                
            });
        }
    },

    // login user
    async LoginTest(req, res) {
        try {
            const { email, password } = req.body;
            const user = await Users.findOne({ email: email });

            if (!email)
                return res.json({
                    status: 400,
                    msg: "Email is empty",
                });

            if (!password)
                return res.json({
                    status: 400,
                    msg: "Password is empty",
                });

            if (!user)
                return res.json({
                    status: 400,
                    msg: "Email is not correct",
                });
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch)
                  return res.json({
                    status: 400,
                    msg: 'Incorrect password.',
                  });

            // If login success, create access token and refresh token
            // const accessToken  = createAccessToken({id: user._id});
            // const refreshToken = createRefeshToken({id: user._id});

            // res.cookie('refreshtoken', refreshToken,{
            //     httpOnly: true,
            //     path: '/api/auth/customer/refresh_token',
            //     maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
            //   });

             res.json({
                status: 200,
                // accessToken,
                msg: "Login is successfully",
                id: user.id
            });
        } catch (error) {
            return res.json({
                status: 400,
                msg: "Login failed",
            });

        }
    },


    // get all user
    async GetAllUserTest(req, res) {
        try {
            // find all user
            const all_user = await UserTests.find({});
            return res.json({
                status: 200,
                msg: "Get all user",
                data: all_user,
            });
        } catch (error) {
            return res.json({
                status: 400,
                msg: "Get all user failed",
            });
        }
    },



    // get proflie
    async GetProfileTest(req, res) {
        try {
            const id = req.params.id;
        
            const data = await UserTests.find({ _id: id });

            // console.log(data.map((item)=>{
            //     return item.fullName
            // }));
            const fullname = data.map((item)=>{
                return item.fullName
            });

            var decstring = cryptr.decrypt(fullname);
       
            // var a=[]
            // a.push({
            //     full:decstring
            // })
            // var alo=data.concat(a)
           
            // const fullNameDecode = fullname.bcrypt.unhash();
            // console.log(fullNameDecode)

            // const a = await UserTests.

            return res.json({
                status: 200,
                msg: "Get profile is successfully",
                data,
                fullNameDec: decstring,
                
            });
        } catch (error) {
            return res.json({
                status: 400,
                msg: "Get profile failed ",
            });
        }
    },


   
};



module.exports = UserTestCtrl;