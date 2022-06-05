const Learn = require('../Model/learnModel');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config();

const LearnCtrl = {
    // create new trafficsign
    async createLearn(req, res){
        try {
            const{question,category,image,answer} = req.body;
            if(!image){
                return res.status(400).json({
                    status: 400,
                    success: false,
                    msg: "No Image Selected",
                });
            }
            const newLearn = new Learn({
                question,
                category,
                image,
                answer,
            });

            // save in mongodb
            await newLearn.save();

            return res.status(200).json({
                status:200,
                success: true,
                msg: "Created new learn successfully",
            });
        } catch (error) {
            return res.status(400).json({
                status:400,
                success: false,
                msg: "Failed create new learn",
            });
        }
    },

    // get all learn
    async getAllLearn(req, res){
        try {
            const data = await Learn.find({});
            return res.status(200).json({
                status: 200,
                success: true,
                msg: "Get all learn is successfully",
                data,
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                success: false,
                msg: "Failed to get all learn",
            });
        }
    },

     // get detail traffic sign
     async getDetailLearn(req, res) {
        try {
            const id = req.params.id;
            const data = await Learn.find({ _id: id });

            return res.json({
                status: 200,
                msg: "Get detail learn is successfully",
                data,
            });
        } catch (error) {
            return res.json({
                status: 400,
                msg: "Get detail learn failed ",
            });
        }
    },

    // get learn follow id category
    async getLearnFollowIdCategory(req, res){
        try {
            const categoryId = req.params.id;

      const data = await Learn.find({
        // category: mongoose.Types.ObjectId(categoryId),
        category: categoryId,
      })
        .populate("category")

      return res.status(200).json({
        status: 200,
        success: true,
        data,
        msg: "Get learn by category successfully",
      });

        } catch (error) {
            return res.status(400).json({
                status: 400,
                success: false,
                msg: "Failed to get learn by category",
              });

        }
    }
};

module.exports = LearnCtrl;

