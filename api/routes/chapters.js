const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Chapter was got'
    });
});

router.post('/',(req,res,next)=>{
    res.status(201).json({
        message:'Chapter was posted'
    });
});

router.get('/:chapterId',(req,res,next)=>{
    res.status(200).json({
        message:'Chapter ID was got',
        chapterId:req.params.chapterId
    });
});

router.delete('/:chapterId',(req,res,next)=>{
    res.status(200).json({
        message:'Chapter was deleted',
        chapterId:req.params.chapterId
    });
});
module.exports=router;