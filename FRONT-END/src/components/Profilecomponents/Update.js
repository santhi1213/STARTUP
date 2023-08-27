import React, { useEffect } from "react";
import "./update.css";
import Profile from "../Profile";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useParams,useNavigate } from "react-router-dom";
function Update(){
  const [name,setName]=useState('');
   const [idea,setIdea]=useState('');
  const params =useParams();
  const navigate =useNavigate();
  useEffect(()=>{
    
    getIdeaDetails();
  },[]);

  const getIdeaDetails=async()=>{
    console.log(params)
    let result =await fetch(`http://localhost:5000/idea/${params.id}`);
    result =await result.json();
    setName(result.name)
    setIdea(result.idea)
  };
    const updateIdea=async()=>{
      console.log(name,idea)
      let result =await fetch(`http://localhost:5000/idea/${params.id}`,{
        method:'put',
        body:JSON.stringify({name,idea}),
        headers:{
          'Content-Type':"application/json"
        }
      });
     result = await result.json()
     console.log(result)
     navigate('/idealist')
    };
    return(
        <>
        <Profile />
        <div className="tat">
        <h1>Update Idea</h1>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name" 
  value={name} onChange={(e)=>{setName(e.target.value)}}/>
   </div>
   <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Idea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{height:'500px'}}  
  value={idea} onChange={(e)=>{setIdea(e.target.value)}}></textarea>
   </div>
   <button onClick={updateIdea}>Update</button>
          
        
      </div>
        
        </>
    )
}

export default Update;