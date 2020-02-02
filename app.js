const express=require('express');
const app= express();

const bookRoutes=require('./api/routes/books');
const chapterRoutes=require('./api/routes/chapter');

app.use('/books',bookRoutes);
app.use('/chapters',chapterRoutes);

module.exports=app;