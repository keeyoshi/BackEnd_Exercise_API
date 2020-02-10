const express=require('express');
const app=express();
const morgan=require('morgan');

const bookRoutes=require('./api/routes/books');
const chapterRoutes=require('./api/routes/chapters');

app.use(morgan('dev'));

app.use('/books',bookRoutes);
app.use('/chapters',bookRoutes);

app.use((req,res,next)=>{
    const error=new Error('Not Found');
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    });
});

module.exports=app;  