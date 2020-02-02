const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling Get request books'
    });
});

router.post('/',(req,res,next)=>{
    res.status(201).json({
        message:'Handling Post request books'
    });
});

router.get('/:bookId',(req,res,next)=>{
    const id=req.params.bookId;
    if(id=='special'){
        res.status(200).json({
            message:'Special Book',
            id:id
        });
    } else{
        res.status(200).json({
            msessage:'You passed an ID'
        });
    }
});

router.patch('/:bookId',(req,res,next)=>{
    res.status(200).json({
        message:'update'
    });
});


router.delete('/:bookId',(req,res,next)=>{
    res.status(200).json({
        message:'deleted'
    });
});


module.exports=router;