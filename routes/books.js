const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

const Book=require('../models/book');

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"book handling get"
    });
});

router.post('/',(req,res,next)=>{
   const book=new Book({
    _id:new mongoose.Types.ObjectId(),
    name:req.body.name,
    author:req.body.author
   });
   book.save().then(result=>{
       console.log(result);
   })
   .catch(err=>console.log(err));
    res.status(201).json({
        message:"Added succsufully",
        createdBook: book
    });
});

router.get('/:bookId',(req,res,next)=>{
    const id=req.params.bookId;
    Book.findById(id).exec()
    .then(doc=>{
        console.log(doc);
        res.status(200).json({doc})
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({error:err});
    });
});


router.patch('/:bookId',(req,res,next)=>{
   res.status(200).json({
       message:"Updated"
   });
});


router.delete('/:bookId',(req,res,next)=>{
    res.status(200).json({
        message:"Delected"
    });
 });

module.exports=router;