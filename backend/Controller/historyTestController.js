const HistoryTests = require('../Model/historyTestModel');
require('dotenv').config();

const HistoryTestCtrl = {

    // create new category law car
    async createHistory(req, res){
        try {
        
            const{mark, idUser } = req.body;
        
            const newHistoryTest = new HistoryTests({
                mark: mark,
                idUser: idUser
            
            });

            // save in mongodb
            await newHistoryTest.save();

            return res.status(200).json({
                status:200,
                success: true,
                msg: "Created new history test successfully",
            });
        } catch (error) {
            return res.status(400).json({
                status:400,
                success: false,
                msg: "Failed create new history test",
            });
        }
    },

     // get all learn
     async getAllHistory(req, res){
        try {
            const data = await HistoryTests.find({});
        
            return res.status(200).json({
                status: 200,
                success: true,
                msg: "Get all history test is successfully",
                count: data.length,
                data,
            
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                success: false,
                msg: "Failed to get all history test",
            });
        }
    },

};


module.exports = HistoryTestCtrl;