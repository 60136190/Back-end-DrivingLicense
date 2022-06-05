const CategoryLearn = require('../Model/categoryLearnModel');

const CategoryLearnCtrl = {
    // create new category learn
    async createCategoryLearn(req, res){
        try {
            const{name,image} = req.body;
            if(!image){
                return res.status(400).json({
                    status: 400,
                    success: false,
                    msg: "No Image Selected",
                });
            }

            const newCategoryLearn = new CategoryLearn({
                name,
                image,
            });

            // save in mongodb
            await newCategoryLearn.save();

            return res.status(200).json({
                status:200,
                success: true,
                msg: "Created new category learn successfully",
            });
        } catch (error) {
            return res.status(400).json({
                status:400,
                success: false,
                msg: "Failed create new category learn",
            });
        }
    },

    // get all category learn
    async getAllCategoryLearn(req, res){
        try {
            const all_category = await CategoryLearn.find({});
            return res.json({
                status: 200,
                success: true,
                msg: "Get all category learn is successfully",
                data: all_category,
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                success: false,
                msg: "Failed to get all category learn",
            });
        }
    },
};

module.exports = CategoryLearnCtrl;

