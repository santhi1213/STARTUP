import React from "react";
import Profile from "../Profile";
import styles from "./personal.module.css";
import { MDBInput } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';



function details(){
    return(
        <>
        <Profile />
        <div className={styles.personal}>
          <h2>Your Details</h2>
          <div className={styles.name}>
            <label>Name:</label>
            <MDBInput label='Name' type='text' id='formWhite' placeholder="Enter Your Name...."  />
          </div>
          <div className={styles.name}>
            <label>Email:</label>
            <MDBInput label='Email' type='email' id='formWhite' placeholder="Enter Your Email...." />
          </div>
          <div className={styles.name}>
            <label>Profession:</label>
            <MDBInput label='Profession' type='text' id='formWhite' placeholder="Enter Your Profession...."  />
          </div>
          <div className={styles.name}>
            <label>Gender:</label>
            <MDBInput label='Gender' type='text' id='formWhite' placeholder="Enter Your Gender...." />
          </div>
          <div className={styles.name}>
            <label>College:</label>
            <MDBInput label='College' type='text' id='formWhite' placeholder="Enter Your College Name...."  />
          </div>
          <div className={styles.name}>
            <label>Bio:</label>
            <MDBInput label='Bio' as='textarea' rows={5} id='formWhite'  style={{ height:'100px' }} />
          </div>
          <br/><br/>

          <button className={styles.update}>Update</button>
          <button className={styles.cancel}>Cancel</button>
        </div>
    
        </>
    )
}

export default details;