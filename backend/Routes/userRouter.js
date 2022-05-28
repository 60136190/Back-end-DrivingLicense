const express = require('express');
const router = express.Router();
const UserCtrl = require('../Controller/userController.js');


//Register
router.post('/register',UserCtrl.Register);

//Login
router.post('/login',UserCtrl.Login);

//Get all user
router.get('/getAll',UserCtrl.GetAllUser);

//Get profile
router.get('/getProfile/:id',UserCtrl.GetProfile);

//Update profile
router.patch('/updateUser/:id',UserCtrl.UpdateUser);

//Delete user
router.delete('/deleteUser/:id',UserCtrl.DeleteUser);

//Change password user
router.patch('/changePassword/:id',UserCtrl.ChangePassword);

module.exports = router;

