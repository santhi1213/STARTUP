import React from 'react'
import "./listthree.css"
import CP31 from "./images/CP31.jpg"
import CP32 from "./images/CP32.jpg"
import CP33 from "./images/CP33.jpg"
import CP34 from "./images/CP34.jpg"
import CP35 from "./images/CP35.jpg"
import CP36 from "./images/CP36.jpg"
import CP37 from "./images/CP37.jpg"
const Listthree = () => {
  return (
    <div>
      <div className="brow">
        <br></br>
        <h1 className="browse-te">Browse Companies </h1>
      </div> 
      <div>
      <img src={CP31} alt="poster" className="cp-first" />   
      </div>
      <div className='rapid'>
       <img src={CP32} alt="poster" className="cp-second" />
       </div>
       <div className='rapid-two'>
       <img src={CP33} alt="poster" className="cp-second" />
       </div>
       <div className='rapid-three'>
       <img src={CP34} alt="poster" className="cp-second" />
       </div>
       <div className='rapid-four'>
       <img src={CP35} alt="poster" className="cp-second" />
       </div>
       <div className='rapid-five'>
       <img src={CP36} alt="poster" className="cp-second" />
       </div>
       <div className='rapid-six'>
       <img src={CP37} alt="poster" className="cp-second" />
       </div>


    </div>
    
  )
}

export default Listthree