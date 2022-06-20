const express = require('express');
const router = express.Router();
const LawCtrl = require('../Controller/lawController');

// create new traffic sign
router.post('/add',LawCtrl.createListLawCar);

// get all learn
router.get('/getAll/:id',LawCtrl.getListLawCar);


module.exports = router;