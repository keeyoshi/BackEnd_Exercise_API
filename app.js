const express=require('express');
const app=express();
const morgan=require('morgan');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const bookRoutes=require('./routes/books');
const chapterRoutes=require('./routes/chapters');

mongoose.connect(
    'mongodb+srv://keeyoshi:'+
    process.env.MONGO_ATLAST_PW +
    '@bookreading-617t5.mongodb.net/test?retryWrites=true&w=majority',
{
    useUnifiedTopology: true,
    useNewUrlParser:true
 });
mongoose.Promise=global.Promise;

app.use(morgan('dev'));
app.use('/uploads',express.static('uploads'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/books',bookRoutes);
app.use('/chapters',chapterRoutes);

app.use((req,res,next)=>{
    const error=new Error('Not Found');;
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
});

module.exports=app;