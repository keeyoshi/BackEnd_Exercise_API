const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'handling get request books'
    });
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'handling post request books'
    });
});

router.get('/:bookId',(req, res, next)=>{
    const id=req.params.bookId;
    if(id=='special'){
        res.status(200).json({
            message:'Special Id',
            id:id
        });
    }else{
        res.status(200).json({
            message:'failed'
        });
    }
});

router.patch('/:bookId',(req, res, next)=>{
        res.status(200).json({
            message:'updated'
        });
});

router.delete('/:bookId',(req, res, next)=>{
    res.status(201).json({
        message:'deleted'
    });
});

module.exports=router;