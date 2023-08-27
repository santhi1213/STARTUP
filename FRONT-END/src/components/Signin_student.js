import React from "react";
import styles from  "./signin.module.css";
import signpic from "./images/signpic.png";
import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { MDBInput } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Signin(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate =useNavigate();
  const handleLogin =async (event)=> {
    event.preventDefault()
    console.log("email,password",email,password)
    let result =await fetch('http://localhost:5000/login',{
      method:'post',
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type':'application/json'
    }
    });
    result= await result.json();
    console.log(result)
    if(result.name){
     localStorage.setItem("user",JSON.stringify(result));
     navigate("/")
    }else{
      alert("Please enter correct details")
    }
  }
  return(
    <div className={styles.wrapper}>

      <img src={signpic} className={styles.signpic} />
      <div className={styles.login}>
        <h1>Sign In</h1>
        <br/><br/>
        <form onSubmit={handleLogin}> 
        <div style={{ width:'500px', marginLeft:'50px' }}>
          <MDBInput type="email" label='Username' className={styles.input} value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>
           
          <br/><br/> 
          <div style={{ width:'500px', marginLeft:'50px' }}>
            <MDBInput type="password" label='Password' value={password} onChange={(e)=>setPassword(e.target.value)} style={{ width:'800px' }} required />
          </div>
           
          <br/><br/>
          <button className={styles.btn} type="submit">SignIn</button>
          
        </form>
      </div>
    </div>
  )
}

export default Signin;