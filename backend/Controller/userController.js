const Users = require('../Model/userModel.js');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config();

const UserCtrl = {

    // create new account
    async Register(req, res) {
        try {
            // crate variable email and password
            const { fullName, phoneNumber, address, email, password } = req.body;
            const user = await Users.findOne({ email });

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
            const newUser = new Users({
                fullName: fullName,
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
            });

        } catch (error) {
            return res.json({
                status: 400,
                msg: 'Register failed',
            });
        }
    },

    // login user
    async Login(req, res) {
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
    async GetAllUser(req, res) {
        try {
            // find all user
            const all_user = await Users.find({});
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
    async GetProfile(req, res) {
        try {
            const id = req.params.id;
            const data = await Users.find({ _id: id });

            return res.json({
                status: 200,
                msg: "Get profile is successfully",
                data,
            });
        } catch (error) {
            return res.json({
                status: 400,
                msg: "Get profile failed ",
            });
        }
    },

    // update profile
    async UpdateUser(req, res) {
        try {
            //get id
            const id = req.params.id;
            const { fullName, phoneNumber, address, email } = req.body;

            await Users.findByIdAndUpdate(
                { _id: id },
                { fullName: fullName, 
                    phoneNumber: phoneNumber,
                    address: address,
                    email: email });

            return res.json({
                status: 200,
                msg: "Update profile succesfully",
            });

        } catch (error) {
            return res.json({
                status: 400,
                msg: "Update profile failed",
            });
        }
    },


    // delete user
    async DeleteUser(req, res) {
        try {
            const id = req.params.id
            await Users.findByIdAndDelete({ _id: id });

            return res.json({
                status: 200,
                msg: "Delete user successfully"
            });

        } catch (error) {
            return res.json({
                status: 400,
                msg: "Delete user failed"
            });
        }
    },

    // change password
    async changePassword(req, res) {
        try {
            const user = req.params.id;
            const oldPass = await Users.findById(user).select('+password');
            const { password, newpassword, confirmpassword } = req.body;

            if (!password)
                return res.json({
                    status: 400,
                    msg: "Password is empty",
                });

            if (!newpassword)
                return res.json({
                    status: 400,
                    msg: "New password is empty",
                });

            if (!confirmpassword)
                return res.json({
                    status: 400,
                    msg: "Confirm password is empty",
                });
                
                if (newpassword.length < 6)
                return res.json({
                  status: 400,
                  success: false,
                  msg: "Password is at least 6 characters long.",
                });
        
              let reg = new RegExp(
                "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
              ).test(newpassword);
              if (!reg) {
                return res.json({
                  status: 400,
                  success: false,
                  msg: "Includes 6 characters, uppercase, lowercase and some and special characters.",
                });
              }

            if (newpassword !== confirmpassword)
                return res.json({
                    status: 400,
                    msg: "New password and confirm are not match",
                });

           
            const isMatch = await bcrypt.compare(password, oldPass.password);
      if (!isMatch)
        return res.json({
          status: 400,
          success: false,
          msg: "Old Password Incorrect",
        });
        
        const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(newpassword, salt);
       await Users.findByIdAndUpdate(
        { _id: user },
        { password: passwordHash},
      );
            return res.json({
                status: 200,
                msg: "Change password is successfully",
            });
        } catch (error) {
            return res.json({
                status: 400,
                msg: "Change password failed",
            });
        }
    },
};



const createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h' });
  };
  const createRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
  };

module.exports = UserCtrl;