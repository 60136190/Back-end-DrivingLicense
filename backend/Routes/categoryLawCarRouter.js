const express = require('express');
const router = express.Router();
const LawCtrl = require('../Controller/lawController');

// create new law car
router.post('/add',LawCtrl.createCategoryLawCar);

// get all category traffic sign 
router.get('/getAll',LawCtrl.getAllCategoryLawCar);

module.exports = router;