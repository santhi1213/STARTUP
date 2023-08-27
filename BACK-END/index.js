const express =require("express");
const cors =require("cors");
require('./db/config');
const mongoose =require('mongoose');
const User=require("./db/User");
const Sponser=require("./db/Sponser")
const Idea =require("./db/idea");
const idea = require("./db/idea");
const app =express();
app.use(express.json());
app.use(cors());

app.post("/register",async(req,resp)=>{
  const user= new User(req.body);
  let result = await user.save();
  result = result.toObject()
   delete result.password
  resp.send(result);
})

app.post("/investor",async(req,resp)=>{
   const sponser =new Sponser(req.body);
   let result = await sponser.save();
   result = result.toObject();
   delete result.password
   resp.send(result);
})

app.post("/login",async(req,resp)=>{
  console.log(req.body)
  if(req.body.password && req.body.email){
  let user = await User.findOne(req.body).select("-password");
    if(user)
    {
     resp.send(user)
    }else {
     resp.send({result:'No User Found'})
    }
  }else {
    resp.send({result:'No User Found'})
  }
})
app.post("/log",async(req,resp)=>{
  console.log(req.body)
  if(req.body.password && req.body.email){
  let sponser = await Sponser.findOne(req.body).select("-password");
    if(sponser)
    {
     resp.send(sponser)
    }else {  
     resp.send({result:'No User Found'})
    }
  } else{
    resp.send({result:'No User Found'})
  }
   
})

app.post("/add-idea",async(req,resp)=>{

let idea =new Idea(req.body);
let result = await idea.save();
resp.send(result);

})

app.get("/ideas",async(req,resp)=>{
  let ideas = await idea.find();
  if(ideas.length>0){
    resp.send(ideas)
  }else{
    resp.send({result:"No product found"})
  }
})

app.delete("/idea/:id",async(req,resp)=>{

const result=await idea.deleteOne({_id:req.params.id})
resp.send(result);
});

app.get("/idea/:id",async(req,resp)=>{
  let result = await idea.findOne({_id:req.params.id});
  if(result){
    resp.send(result)
  }else{
    resp.send({result:"No Result Found"})
  }
});

app.put("/idea/:id",async(req,resp)=>{
  let result =await idea.updateOne(
    {_id: req.params.id},
    {
      $set:req.body 
    }
  )
  resp.send(result)
});

app.listen(5000); 
