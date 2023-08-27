import React from "react";
import Profile from "../Profile";
import styles from "./passwords.module.css";
import { MDBInput } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';



function details(){
    return(
        <>
        <Profile />
        <div className={styles.entire}>
          <h3 style={{ float:'left', marginTop:'-5px',marginLeft:'2%', fontVariant:'lining-nums', color:'teal', fontSize:'22px' }}>Your previous password</h3>
          <div className={styles.password}>
            <label>Previous Password:</label>
            <MDBInput label='Previous Password' type='password' id='formWhite' defaultValue={'StartHub'} readOnly/>
          </div><br/>
          <h3 style={{ float:'left', marginTop:'5px',marginLeft:'2%', fontVariant:'lining-nums', color:'teal', fontSize:'22px'}}>Your current password</h3>
          <div className={styles.password}>
            <label>Current Password:</label>
            <MDBInput label='Current Password' type='password' id='formWhite' defaultValue={'StartHub'} style={{ marginTop:'3%' }} readOnly/>
          </div>

          <br/><br/>
          <h3 style={{ color: 'red', fontSize:'15px' }}>Have you forgot your password?</h3>
          <br/>

          <button className={styles.forgot}> Recover</button>
        
        </div>
        
        </>
        
    )
}

export default details;