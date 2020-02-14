const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

const Book=require('../models/book');

router.get('/',(req,res,next)=>{
   Book.find()
   .select('name author _id')
   .exec()
   .then(docs=>{
       const response={
           count:docs.length,
           books:docs.map(doc=>{
               return{
                   name:doc.name,
                   author:doc.author,
                   _id:doc._id,
                   request:{
                       type:'GET',
                       url:'http://localhost:3000/books/'+doc._id
                   }
               }
           })
       };
       res.status(200).json(response);
   })
   .catch(err=>{
console.log(err);
    res.status(500).json({
        error:err
        });
   });
});

router.post('/',(req,res,next)=>{
   const book=new Book({
    _id:new mongoose.Types.ObjectId(),
    name:req.body.name,
    author:req.body.author
   });
   book.save()
   .then(result=>{
       console.log(result);
       res.status(201).json({
           message:"Added Successfully",
           createdBook:{
               name:result.name,
               author:result.author,
               request:{
                   type:'GET',
                   url:"http://localhost:3000/books/"+ result._id
               }
           }
    });
   })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
    });
});
});

router.get('/:bookId',(req,res,next)=>{
    const id=req.params.bookId;
    Book.findById(id)
    .select('name author _id')
    .exec()
    .then(doc=>{
        console.log("From database",doc);
        if(doc){
            res.status(200).json({
                book: doc,
                request:{
                    type:'GET',
                    url:'http://localhost:3000/books'
                }
            });
        }
        else{
            res.status(404).json({
                message:'No valid entry found in the database'
            });
        }
        res.status(200).json({doc});
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({error:err});
    });
});


router.patch('/:bookId',(req,res,next)=>{
    const id=req.params.bookId;
    const updateOps={};
    for(const ops of req.body){
        updateOps[ops.propName]=ops.value;
    }
    Book.update({_id:id}, {$set: updateOps })
    .exec()
    .then(result=>{

        res.status(200).json({
            message:'Book Updated',
            request:{
                type:'GET',
                url:'http://localhost:3000/books/' +id
            }
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});


router.delete('/:bookId',(req,res,next)=>{
    const id=req.params.bookId;
   Book.remove({_id:id})
   .exec()
   .then(result=>{
       res.status(200).json({
           message:'Book deleted',
           request:{
               type:'POST',
               url:'http://localhost:3000/books',
               body:{name:'String', author:'String'}
           }
       });
   })
   .catch(err=>{
       console.log(err);
       res.status(500).json({
           error:err
       });
   });
 });

module.exports=router;