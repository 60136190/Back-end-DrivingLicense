const express = require('express');
const router = express.Router();
const TrafficSignCtrl = require('../Controller/trafficSignController.js');

// create new traffic sign
router.post('/add',TrafficSignCtrl.createTrafficSign);

// get all traffic sign
router.get('/getAll',TrafficSignCtrl.getAllTrafficSign);

// get detail traffic sign
router.get('/getDetail/:id',TrafficSignCtrl.getDetailTrafficSign);

// get traffic sign follow id category
router.get('/getTrafficSignFollowIdCategory/:id', TrafficSignCtrl.getTrafficSignFollowIdCategory);

module.exports = router;