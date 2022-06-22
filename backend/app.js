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

// link user test root
const userTest = require('./Routes/userRouterTest');
app.use('/userTest/',userTest);


// link traffic sign root 
const trafficSign = require('./Routes/trafficSignRouter');
app.use('/trafficSign',trafficSign);

// link category traffic sign root 
const categorySign = require('./Routes/categorySignRouter');
app.use('/categorySign',categorySign);

// link learn
const learn = require('./Routes/learnRouter');
app.use('/learn',learn);

// link category learn
const categoryLearn = require('./Routes/categoryLearnRouter');
app.use('/categoryLearn',categoryLearn);

// link trick
const trick = require('./Routes/trickRouter');
app.use('/trick',trick);

// link category law
const categoryLawCar = require('./Routes/categoryLawCarRouter');
app.use('/categoryLawCar',categoryLawCar);

// link law
const law = require('./Routes/lawRouter');
app.use('/law',law);

// link history test
const history = require('./Routes/historyTestRouter');
app.use('/history',history);

module.exports = app;