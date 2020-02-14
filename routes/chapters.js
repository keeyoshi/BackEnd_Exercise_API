const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

const Chapter=require('../models/chapter');
const Book=require('../models/book');

router.get('/',(req,res,next)=>{
   Chapter.find()
   .select('book title content _id')
   .populate('book','name')
   .exec()
   .then(docs=>{
    res.status(200).json({
        count:docs.length,
        Chapter : docs.map(docs=>{
            return {
                _id:docs._id,
                book:docs.book,
                title:docs.title,
                content:docs.content,
                request:{
                    type:'GET',
                    url:'http://localhost:3000/chapters/'+ docs._id
                }
            }
        })
    });
   })
   .catch(err=>{
       res.status(500).json({
        error:err
       });
   });
});

router.post('/',(req,res,next)=>{
    Book.findById(req.body.bookId)
    .then(book=>{
        if(!book){
            return res.status(404).json({
                message:'Book Not Available'
            });
        }
        const chapter= new Chapter({
            _id:mongoose.Types.ObjectId(),
            title:req.body.title,
            content:req.body.content,
            book:req.body.bookId
        });
        return chapter
        .save();
    })
    .then(result=>{
        if(res.statusCode===404){
            return res;
        }
        console.log(result);
        res.status(201).json({
           message:'Chapter Saved',
           createdChapter:{
             _id:result._id,
            book:result.book,
            title:result.title,
            content:result.content
           },
            request:{
                type:'GET',
                url:'http://localhost:3000/chapters/'+result._id
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

router.get('/:chapterId',(req,res,next)=>{
   Chapter.findById(req.params.chapterId)
   .populate('book')
   .exec()
   .then(chapter=>{
       if(!chapter){
           return res.status(404).json({
               message:'Chapter Not Available'
           });
       }
       res.status(200).json({
           chapter:chapter,
           request:{
                type:'GET',
                url:'http://localhost:3000/chapters'
           }
       });
   })
   .catch(err=>{
       res.status(500).json({
           error:err
       });
   });
});


router.patch('/:chapterId',(req,res,next)=>{
   res.status(200).json({
       message:"Updated C"
   });
});


router.delete('/:chapterId',(req,res,next)=>{
   Chapter.remove({_id:req.params.chapterId})
   .exec()
   .then(result=>{
       res.status(200).json({
        message:'Message Deleted',
        request:{
            type:"POST",
            url:"http://localhost:3000/chapters",
            body:{bookId:'ID',title:'String',content:'String'}
        }
       });
   })
   .catch(err=>{
       res.status(500).json({
           error:err
       });
   });
 });

module.exports=router;