const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    bookname:{
        type:String,
        required:true
    },
    bookgenre:{
        type:String,
        required:true
    },
    completed:{
        type:String,
        required:false
    }
})