const TrafficSign = require('../Model/trafficSignModel.js');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config();

const TrafficSignCtrl = {
    // create new trafficsign
    async createTrafficSign(req, res){
        try {
            const{name,code,description, image,category} = req.body;
            if(!image){
                return res.status(400).json({
                    status: 400,
                    success: false,
                    msg: "No Image Selected",
                });
            }

            const newTrafficSign = new TrafficSign({
                name,
                code,
                description,
                image,
                category
            });

            // save in mongodb
            await newTrafficSign.save();

            return res.status(200).json({
                status:200,
                success: true,
                msg: "Created new traffic sign successfully",
            });
        } catch (error) {
            return res.status(400).json({
                status:400,
                success: false,

                msg: "Failed create new traffic sign",
            });
        }
    },

    // get all traffic sign
    async getAllTrafficSign(req, res){
        try {
            const data = await TrafficSign.find({});
            return res.status(200).json({
                status: 200,
                success: true,
                msg: "Get all traffic sign is successfully",
                data,
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                success: false,
                msg: "Failed to get all traffic sign",
            });
        }
    },

    // get traffic sign follow id category
    async getTrafficSignFollowIdCategory(req, res){
        try {
            const categoryId = req.params.id;

      const data = await TrafficSign.find({
        // category: mongoose.Types.ObjectId(categoryId),
        category: categoryId,
      })
        .populate("category")

      return res.status(200).json({
        status: 200,
        success: true,
        data,
        msg: "Get traffic sign by category successfully",
      });

        } catch (error) {
            return res.status(400).json({
                status: 400,
                success: false,
                msg: "Failed to get traffic sign by category",
              });

        }
    }
};

module.exports = TrafficSignCtrl;

