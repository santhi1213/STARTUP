import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import styles from "./contact.module.css";
import con from "./images/con.png"

function Contact(){
    return(
        <>
        
      
            
        

        <div className={styles.wrapper}>
            <img src={con} className={styles.im}></img>
            <div className={styles.login}>
                <h1 className={styles.mb-3}>Contact Us</h1>
                <br/><br/>
                
                <form >
                    <InputGroup>
                        <InputGroup.Text className={styles.label1}>Name</InputGroup.Text>
                        <Form.Control type="textarea" aria-label="With textarea" required />
                    </InputGroup> 

                    <br/>
                    <br/>
                    <InputGroup>
                        <InputGroup.Text className={styles.label2}>Contact</InputGroup.Text>
                        <Form.Control type="text" required />
                    </InputGroup> 

                    <br/>
                    <br/>

                    <InputGroup>
                        <InputGroup.Text className={styles.label3}>Query</InputGroup.Text>
                        <Form.Control as="textarea"  aria-label="With textarea" required />
                    </InputGroup> 
                    <br/>
                    <br/>
                    <button type="submit" className={styles.btn1}>Submit</button>
                </form>
                
            </div>
        </div>
        
        <footer className={styles.foot}>
            <p><i class="fa-sharp fa-regular fa-copyright"></i>ID App 2023 Inc. All rights reserved..</p>

        </footer>
    
        </>
    )
}

export default Contact;

