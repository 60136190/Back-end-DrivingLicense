const express = require('express');
const router = express.Router();
const CategorySignCtrl = require('../Controller/categorySignController');

// create new category traffic sign
router.post('/add',CategorySignCtrl.createCategorySign);

// get all category traffic sign 
router.get('/getAll',CategorySignCtrl.getAllCategoryTrafficSign);

module.exports = router;