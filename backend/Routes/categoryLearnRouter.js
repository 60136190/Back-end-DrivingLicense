const express = require('express');
const router = express.Router();
const CategoryLearnCtrl = require('../Controller/categoryLearnController');

// create new category traffic sign
router.post('/add',CategoryLearnCtrl.createCategoryLearn);

// get all category traffic sign 
router.get('/getAll',CategoryLearnCtrl.getAllCategoryLearn);

module.exports = router;