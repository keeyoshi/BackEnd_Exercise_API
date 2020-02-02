const express=require('express');
const router=express.Router();

router.get('/',(req ,res, next)=>{
    res.status(200).json({
        message:'Chapter were geted'
    });
});

router.post('/',(req ,res, next)=>{
    res.status(201).json({
        message:'Chapter were added'
    });
});

router.get('/:chapterId',(req,res,next)=>{
        res.status(200).json({
            message:'Special Chapter',
            chapterid:res.params.chapteridid
        });
});

router.delete('/:chapterId',(req,res,next)=>{
    res.status(200).json({
        message:'deleted Chapter',
        chapterid:res.params.chapteridid
    });
});


module.exports=router;