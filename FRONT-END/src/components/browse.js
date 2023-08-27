import React from "react";
import {  useNavigate} from "react-router-dom";
import styles from "./browse.module.css";
import cpl11 from "./images/CPL11.jpg";
import cpl21 from "./images/CPL21.jpg";
import cpl31 from "./images/CPL31.jpg";
import cpl41 from "./images/CPL41.jpg";
import cpl51 from "./images/CPL51.jpg";
import cpl61 from "./images/CPL61.jpg";
import cpl71 from "./images/CPL71.jpg";
import cpl81 from "./images/CPL81.jpg";

function Browse(){

  const navigate = useNavigate();

  const navigateToSponser = () => {
       navigate('/sponserlist');
  }
  const navigateToListtwo = () => {
    navigate('/listtwo');
}
const navigateToListthree = () => {
  navigate('/listthree');
}
const navigateToListfour = () => {
  navigate('/listfour');
}

    return(
      <>
      
      <div className={styles.cards}>

        <div  style={{ border:'1px solid black', width:'18%',height:'350px', borderRadius:'10px', marginTop:'2%', marginLeft:'5%' }}>
          <img src={cpl11} style={{ width:'306px', borderTopLeftRadius:'25px', borderTopRightRadius:'25px', height:'200px',marginTop:'-17px', marginRight:'1124px' }}/>
          <p style={{ marginTop:'200px' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button onClick={ navigateToSponser }>Click Here</button>
        </div> 
        <div  style={{ border:'1px solid black', width:'18%',height:'350px', borderRadius:'10px', marginTop:'2%', marginLeft:'5%' }}>
          <img src={cpl21} style={{ width:'306px', borderTopLeftRadius:'25px', borderTopRightRadius:'25px', height:'200px',marginTop:'-17px', marginRight:'773px' }}/>
          <p style={{ marginTop:'200px' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button onClick={navigateToListtwo}>Click Here</button>
        </div>
        <div  style={{ border:'1px solid black', width:'18%',height:'350px', borderRadius:'10px', marginTop:'2%', marginLeft:'5%' }}>
          <img src={cpl31} style={{ width:'306px', borderTopLeftRadius:'25px', borderTopRightRadius:'25px', height:'200px',marginTop:'-17px', marginRight:'425px' }}/>
          <p style={{ marginTop:'200px' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button onClick={navigateToListthree }>Click Here</button>
        </div>
        <div  style={{ border:'1px solid black', width:'18%',height:'350px', borderRadius:'10px', marginTop:'2%', marginLeft:'5%' }}>
          <img src={cpl41} style={{ width:'306px', borderTopLeftRadius:'25px', borderTopRightRadius:'25px', height:'200px',marginTop:'-17px', marginRight:'75px' }}/>
          <p style={{ marginTop:'200px' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button onClick={ navigateToListfour}>Click Here</button>
        </div>
       
      </div>

<div className={styles.cards}>

        <div  style={{ border:'1px solid black', width:'18%',height:'350px', borderRadius:'10px', marginTop:'2%', marginLeft:'5%' }}>
          <img src={cpl51} style={{ width:'306px', borderTopLeftRadius:'25px', borderTopRightRadius:'25px', height:'200px',marginTop:'-17px', marginRight:'1124px' }}/>
          <p style={{ marginTop:'200px' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button>Click Here</button>
        </div> 
        <div  style={{ border:'1px solid black', width:'18%',height:'350px', borderRadius:'10px', marginTop:'2%', marginLeft:'5%' }}>
          <img src={cpl61} style={{ width:'306px', borderTopLeftRadius:'25px', borderTopRightRadius:'25px', height:'200px',marginTop:'-17px', marginRight:'773px' }}/>
          <p style={{ marginTop:'200px' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button>Click Here</button>
        </div>
        <div  style={{ border:'1px solid black', width:'18%',height:'350px', borderRadius:'10px', marginTop:'2%', marginLeft:'5%' }}>
          <img src={cpl71} style={{ width:'306px', borderTopLeftRadius:'25px', borderTopRightRadius:'25px', height:'200px',marginTop:'-17px', marginRight:'425px' }}/>
          <p style={{ marginTop:'200px' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button>Click Here</button>
        </div>
        <div  style={{ border:'1px solid black', width:'18%',height:'350px', borderRadius:'10px', marginTop:'2%', marginLeft:'5%' }}>
          <img src={cpl81} style={{ width:'306px', borderTopLeftRadius:'25px', borderTopRightRadius:'25px', height:'200px',marginTop:'-17px', marginRight:'75px' }}/>
          <p style={{ marginTop:'200px' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button>Click Here</button>
        </div>
</div>


</>
    
  )
}

export default Browse