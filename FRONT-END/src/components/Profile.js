import React from "react";
import styles from "./Profiler.module.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import user from "./images/user.png";


function Profile(){
  const inputRef = useRef(null);
    const [image, setImage] = useState();
     
    const handleImageClick = () =>{
      inputRef.current.click();
    };

    const handleImageChange = (event) =>{
      const file = event.target.files[0];
      console.log(file);
      setImage(event.target.files[0]);
    };
    return(
        <>
            <div onClick={handleImageClick} >           
              {image ?  (
                <img src={URL.createObjectURL(image)} alt="" className={styles.imge} />
              ):(
                <img src={user} alt="" className={styles.imge} />
              )}
              <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display:'none' }}/>           
            </div>            
            <div className={styles.options}>
                <ul className={styles.list}>
                    <Link to='/personal' style={{ textDecoration:'none', marginLeft:'-40px' }}><li className={styles.pro_items}>Personal details</li></Link>
                    <hr style={{ width:'100%', marginLeft:'-10px', color:'white' }}/>
                    <Link to='/passwords' style={{ textDecoration:'none', marginLeft:'-40px' }}><li className={styles.pro_items}>Passwords</li></Link>
                    <hr style={{ width:'100%', marginLeft:'-10px', color:'white' }}/>
                    <Link to='/idealist' style={{ textDecoration:'none', marginLeft:'-40px' }}><li className={styles.pro_items}>Ideas</li></Link>
                    <hr style={{ width:'100%', marginLeft:'-10px', color:'white' }}/>
                    <Link to='/idea' style={{ textDecoration:'none', marginLeft:'-40px' }}><li className={styles.pro_items}>Add Ideas</li></Link>
                    <hr style={{ width:'100%', marginLeft:'-10px',color:'white' }}/>
                    <Link to='/settings' style={{ textDecoration:'none', marginLeft:'-40px' }}><li className={styles.pro_items}>Setings and Privacy</li></Link>
                    <hr style={{ width:'100%', marginLeft:'-10px', color:'white' }}/>
                    <Link to='/update/:id' style={{ textDecoration:'none', marginLeft:'-40px' }}><li className={styles.pro_items}>Update</li></Link>
                    <hr style={{ width:'100%', marginLeft:'-10px', color:'white' }}/>
                   
                    
                </ul>
            </div>
      
        </>

    )
}

export default Profile;