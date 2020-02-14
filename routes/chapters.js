const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"chapter handling get"
    });
});

router.post('/',(req,res,next)=>{
    const chapter={
        bookId:req.body.bookId,
        content:req.body.content
    };
    res.status(201).json({
        message:"chapter handling post",
        chapter:chapter
    });
});

router.get('/:chapterId',(req,res,next)=>{
    const id=req.params.chapterId;
    if(id==="chapter"){
        res.status(200).json({
            message:"ID Cgapter",
            id:id
        });
    }else{
        res.status(200).json({
            message:"Error"
        });
    }
});


router.patch('/:chapterId',(req,res,next)=>{
   res.status(200).json({
       message:"Updated C"
   });
});


router.delete('/:chapterId',(req,res,next)=>{
    res.status(200).json({
        message:"Delected C"
    });
 });

module.exports=router;