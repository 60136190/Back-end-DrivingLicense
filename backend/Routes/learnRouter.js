const express = require('express');
const router = express.Router();
const LearnCtrl = require('../Controller/learnController');

// create new traffic sign
router.post('/add',LearnCtrl.createLearn);

// get all learn
router.get('/getAll',LearnCtrl.getAllLearn);

// get detail learn
router.get('/getDetail/:id',LearnCtrl.getDetailLearn);

// get learn follow id category
router.get('/getLearnFollowIdCategory/:id', LearnCtrl.getLearnFollowIdCategory);

//Update learn
router.patch('/updateLearn/:id',LearnCtrl.UpdateLearn);

module.exports = router;