const express = require('express');
const router = express.Router();
const HistoryTestCtrl = require('../Controller/historyTestController');

// create new category traffic sign
router.post('/add',HistoryTestCtrl.createHistory);

// create new category traffic sign
router.post('/getAll',HistoryTestCtrl.getAllHistory);

module.exports = router;