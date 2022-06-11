const express = require('express');
const router = express.Router();
const TrickCtrl = require('../Controller/trickController');

// create new trick
router.post('/add',TrickCtrl.createTrick);

// get all trick
router.get('/getAll',TrickCtrl.getAllTrick);

// get detail trick
router.get('/getDetail/:id',TrickCtrl.getDetailTrick);

module.exports = router;