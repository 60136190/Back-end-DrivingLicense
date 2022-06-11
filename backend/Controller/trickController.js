const Trick = require('../Model/trickModel');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config();

const TrickCtrl = {
    // create new trafficsign
    async createTrick(req, res){
        try {
            const{title,content} = req.body;
            const newTrick = new Trick({
                title,
                content
            });

            // save in mongodb
            await newTrick.save();

            return res.status(200).json({
                status:200,
                success: true,
                msg: "Created new trick successfully",
            });
        } catch (error) {
            return res.status(400).json({
                status:400,
                success: false,
                msg: "Failed create new trick",
            });
        }
    },

    // get all learn
    async getAllTrick(req, res){
        try {
            const data = await Trick.find({});
        
            return res.status(200).json({
                status: 200,
                success: true,
                msg: "Get all trick is successfully",
                count: data.length,
                data,
            
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                success: false,
                msg: "Failed to get all trick",
            });
        }
    },

     // get detail learn
     async getDetailTrick(req, res) {
        try {
            const id = req.params.id;
            const data = await Trick.find({ _id: id });

            return res.json({
                status: 200,
                msg: "Get detail trick is successfully",
                data,
            });
        } catch (error) {
            return res.json({
                status: 400,
                msg: "Get detail trick failed ",
            });
        }
    },

    
};

module.exports = TrickCtrl;

