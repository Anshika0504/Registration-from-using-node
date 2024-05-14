const mongoose=require('mongoose');
const empSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    phone:{
        type:Number,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    cpassword:{
        type:String,
        require:true,
    }
    
});

const empCollection=new mongoose.model('empcollection',empSchema);

module.exports=empCollection;