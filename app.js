//console.log("jay shree ram");
const express=require("express");
const app=express();
const path=require('path');
const empCollection=require('./model/model')
const template_path=path.join(__dirname,'../template/views')
const port=3000;
app.set('view engine','hbs');
app.set('views',template_path);
app.use(express.urlencoded({extended:false}));
require('./db/db');

app.get('/',(req,res)=>{
res.render("index");
})


app.post("/empdata",async(req,res)=>{
    try{
        const password=req.body.password;
    const cpassword=req.body.cpassword;
    if(password===cpassword){
        const empData=new empCollection({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
           password:req.body.password,
           cpassword:req.body.cpassword,

        });
        const postData=await empData.save();
        res.send(postData);
    }
    else{
        res.send("passwprd not matched:Try again");
    }
    }
    catch(error){
        res.send(error);
    }
})

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
})
