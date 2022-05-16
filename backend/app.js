const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
// link user root
const user = require('./Routes/userRouter.js');
app.use('/user/',user);

// link traffic sign root 
const trafficSign = require('./Routes/trafficSignRouter');
app.use('/trafficSign',trafficSign);

// link category traffic sign root 
const categorySign = require('./Routes/categorySignRouter');
app.use('/categorySign',categorySign);

module.exports = app;