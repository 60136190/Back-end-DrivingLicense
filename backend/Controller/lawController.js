const CategoryLawCar = require('../Model/categoryLawCar');
const Law = require('../Model/lawModel');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config();

const LawCtrl = {
    // create new category law car
    async createCategoryLawCar(req, res){
        try {
            const{name,image} = req.body;
        
            const newCategoryLawCar = new CategoryLawCar({
                name,
                image
            });

            // save in mongodb
            await newCategoryLawCar.save();

            return res.status(200).json({
                status:200,
                success: true,
                msg: "Created new category law car successfully",
            });
        } catch (error) {
            return res.status(400).json({
                status:400,
                success: false,
                msg: "Failed create new category law car",
            });
        }
    },

    // get all law car
    async getAllCategoryLawCar(req, res){
        try {
            const data = await CategoryLawCar.find({});
        
            return res.status(200).json({
                status: 200,
                success: true,
                msg: "Get all category law car is successfully",
                count: data.length,
                data,
            
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                success: false,
                msg: "Failed to get all category law car",
            });
        }
    },

     // create new list law of category law car
     async createListLawCar(req, res){
        try {
            const{title,penalty,image,description,category} = req.body;
        
            const newLawCar = new Law({
                title,
                penalty,
                image,
                description,
                category
            });

            // save in mongodb
            await newLawCar.save();

            return res.status(200).json({
                status:200,
                success: true,
                msg: "Created new law car successfully",
            });
        } catch (error) {
            return res.status(400).json({
                status:400,
                success: false,
                msg: "Failed create new law car",
            });
        }
    },


    // get list law car
    async getListLawCar(req, res){
        try {
            const categoryId = req.params.id;

      const data = await Law.find({
        // category: mongoose.Types.ObjectId(categoryId),
        category: categoryId,
      })

      return res.status(200).json({
        status: 200,
        success: true,
        count : data.length,
        data,
        msg: "Get list law car successfully",
      });

        } catch (error) {
            return res.status(400).json({
                status: 400,
                success: false,
                msg: "Failed to get list law car",
              });

        }
    },

}

module.exports = LawCtrl;

