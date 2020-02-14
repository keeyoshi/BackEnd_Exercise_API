const mongoose=require('mongoose');

const chapterSchema=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    book:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Book',
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Chapter',chapterSchema);
