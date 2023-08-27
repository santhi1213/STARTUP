import React from 'react'
import "./listfour.css"
import  CP41 from "./images/CP41.jpg"
const Listfour = () => {
  return (
    <div>
      <div className="brow">
        <br></br>
        <h1 className="browse-te">Browse Companies </h1>
      </div> 
      <div>
      <img src={CP41} alt="poster" className="cp-first" />   
      </div>
    </div>
  )
}

export default Listfour