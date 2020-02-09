const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bookdb",{
    useNewUrlParser:true,
    useCreateIndex:true
});

mongoose.Promise=global.Promise;
console.log("Successfully Connected Mongoose Database");
