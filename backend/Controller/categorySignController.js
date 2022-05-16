const CategorySign = require('../Model/categorySignModel');

const CategorySignCtrl = {
    // create new category traffic sign
    async createCategorySign(req, res){
        try {
            const{name,image} = req.body;
            if(!image){
                return res.status(400).json({
                    status: 400,
                    success: false,
                    msg: "No Image Selected",
                });
            }

            const newCategorySign = new CategorySign({
                name,
                image,
            });

            // save in mongodb
            await newCategorySign.save();

            return res.status(200).json({
                status:200,
                success: true,
                msg: "Created new category traffic sign successfully",
            });
        } catch (error) {
            return res.status(400).json({
                status:400,
                success: false,

                msg: "Failed create new category traffic sign",
            });
        }
    },

    // get all traffic sign
    async getAllCategoryTrafficSign(req, res){
        try {
            const all_category = await CategorySign.find({});
            return res.json({
                status: 200,
                success: true,
                msg: "Get all category traffic sign is successfully",
                data: all_category,
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                success: false,
                msg: "Failed to get all category traffic sign",
            });
        }
    },
};

module.exports = CategorySignCtrl;

