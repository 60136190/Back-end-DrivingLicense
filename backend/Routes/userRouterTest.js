const express = require('express');
const router = express.Router();
const UserTestCtrl = require('../Controller/userTestController.js');

//Register
router.post('/register',UserTestCtrl.RegisterTest);

//Login
router.post('/login',UserTestCtrl.LoginTest);

//Get all user
router.get('/getAll',UserTestCtrl.GetAllUserTest);

//Get profile
router.get('/getProfile/:id',UserTestCtrl.GetProfileTest);


module.exports = router;

