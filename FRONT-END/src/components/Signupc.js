import React from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Signupc.css'
const Signupc= () => {

  const navigate =useNavigate();
  useEffect(()=>{
    const auth =localStorage.getItem('user');
    if(auth)
    {
      navigate("/")
    }
  })
  return (
    <div>

      <div className='para'>
      <h1 className='para-heading'>Signup</h1><br></br>
      <p className='para-text'>Welcome to our startup fundraising platform! We're thrilled to have you join us on this exciting journey of turning innovative ideas into reality.<br></br>
      </p>
      </div>
       
        <div className='para-main'style={{ cursor:'pointer' }}>
          <div className='para-container'>
       <div className='para-box'>
       <div className='para-text'>
        <div className='para-icon'>01</div>
      <p> If you're a passionate entrepreneur seeking funding 
          you can showcaseyour vision and business plan 
          to attract potential backers who resonate with your goals.
      </p>
      <Link to="/SignUp_student">Entrepreneur</Link>
       </div>
       </div>
      
       <div className='para-box' style={{ cursor:'pointer' }}>
       <div className='para-text'>
        <div className='para-icon'>02</div>
      <p> If you're an investor, you'll have the chance to discover
         cutting-edge ventures aligned with your interests and expertise.
      </p>
       <Link to="/SignUp_sponser">Sponser</Link>
       </div>
       </div>
       </div>
       </div>
      
     
      

    </div>
  
  )
}

export default Signupc;