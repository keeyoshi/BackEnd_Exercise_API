const express=require('express');
const router=express.Router();

router.get('/',(req,res, next)=>{
    res.status(200).json({
        message:'chapter got'
    });
});

router.post('/',(req,res, next)=>{
    res.status(201).json({
        message:'chapter created'
    });
});

router.get('/:chapterId',(req,res, next)=>{
    res.status(200).json({
        message:'chapter id',
        chapterId:req.params.chapterId
    });
});

router.delete('/:chapterId',(req,res, next)=>{
    res.status(200).json({
        message:'chapter deleted',
        chapterId:req.params.chapterId
    });
});

module.exports=router;