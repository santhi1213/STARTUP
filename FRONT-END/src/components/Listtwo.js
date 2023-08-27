import React from 'react'
import "./listtwo.css"
import CP21 from "./images/CP21.jpg"
import { LiaNewspaper} from "react-icons/lia";
import {LuRectangleVertical} from "react-icons/lu"
import CP22 from "./images/CP22.jpg"
import CP23 from "./images/CP23.jpg"
import CP24 from "./images/CP24.jpg"
import CP25 from "./images/CP25.jpg"
import CP26 from "./images/CP26.jpg"
import CP27 from "./images/CP27.jpg"
const Listtwo = () => {
  return (
    <div>
      <div className="brows">
        <br></br>
        <h1 className="browse-tex">Browse Companies </h1>
      </div> 
      <div>
      <img src={CP21} alt="poster" className="cp-first" />   
      </div>
      
      <div className="box-layout">
      <h5 className="news"> <LiaNewspaper/>  PROFILE</h5>
      </div>
       <div className='polker-first'>
       <h2 className='polker-first-text'> <LuRectangleVertical/>Polker: Fast Facts</h2>
       <img src={CP22} alt="poster" className="cp-second" /> 
       </div>
       <div className='polker-third'>
       <img src={CP23} alt="poster" className="cp-second" />
       </div>
       <div className='polker-four'>
       <img src={CP24} alt="poster" className="cp-second" />
       </div>
       <div className='polker-five'>
       <img src={CP25} alt="poster" className="cp-second" />
       </div>
       <div className='polker-six'>
       <img src={CP26} alt="poster" className="cp-second" />
       </div>
       <div className='polker-seven'>
       <img src={CP27} alt="poster" className="cp-second" />
       </div>



    </div>
  )
}

export default Listtwo