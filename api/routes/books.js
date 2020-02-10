const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling GET request books'
    });
});

router.post('/',(req,res,next)=>{
    res.status(201).json({
        message:'Handling POst request books'
    });
});


router.get('/:bookId',(req,res,next)=>{
    const id=req.params.bookId;
    if(id==='special'){
        res.status(200).json({
            message: 'Speicial ID',
            id:id
        });
    }else{
        res.status(200).json({
            message:'Not special ID'
        });
    }
});

router.patch('/:bookId',(req,res,next)=>{
   res.status(200).json({
       message:'Updated'
   });
});


router.delete('/:bookId',(req,res,next)=>{
    res.status(200).json({
        message:'deleted'
    });
 });
module.exports=router;