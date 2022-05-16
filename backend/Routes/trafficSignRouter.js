const express = require('express');
const router = express.Router();
const TrafficSignCtrl = require('../Controller/trafficSignController.js');

// create new traffic sign
router.post('/add',TrafficSignCtrl.createTrafficSign);

// get all traffic 
router.get('/getAll',TrafficSignCtrl.getAllTrafficSign);

module.exports = router;