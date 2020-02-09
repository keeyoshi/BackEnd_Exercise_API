const express=require('express');
const app=express();
const bodyParser=require('body-parser');

const cors=require('cors');
const path=require('path');
const multer=require('multer');
const morgan=require('morgan');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('./Database/mongoose');

const userRoute=require('./Routes/User');

app.use('/user',userRoute);

module.exports=app;