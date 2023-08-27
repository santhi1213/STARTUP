import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import styles from "./sign_up_student.module.css"
import { Link } from "react-router-dom";
import signstudent from "./images/signstudents.png"
import { useState } from "react";
import { MDBInput } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


function Contact(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [college,setCollege]=useState("");
    const [university,setUniversity]=useState("");
    const [password,setPassword]=useState("");
    const [Confirm_password,setConfirm_password]=useState("");
    const [match, setMatch] = useState(false);
    const navigate = useNavigate();
    const collectData=async(event)=>{
        event.preventDefault();
        if (!match) console.log("Passwords do not match");
        else {
            console.log(name,email,college,university,password,Confirm_password);
            let result =await fetch('http://localhost:5000/register',{
                method:'post',
                body: JSON.stringify({name,email,college,university,password,Confirm_password}),
                headers:{
                    'Content-Type':'application/json'
                },
            })
            result =await result.json()
            console.log(result);
            localStorage.setItem("user",result,JSON.stringify(result));
            navigate('/')
            
        } 
        
    }

    useEffect(() => {
        const checkMatch = password === Confirm_password;
        setMatch(checkMatch); 
    }, [password,Confirm_password])

    return(
        <div className={styles.wrapper}>
            <img src={signstudent} className={styles.signstudent} />
            <div className={styles.login1}>
                <h1 className={styles.mb-3}>SignUp as Student</h1>
                <form onSubmit={collectData} > 
                <div style={{ width:'500px', marginLeft:'50px' }}>
                    <MDBInput type="textarea" label='Name' aria-label="With textarea" value={name} onChange={(e)=>setName(e.target.value)} required/>
                </div>
                    
                    <br/> 
                <div style={{ width:'500px', marginLeft:'50px' }}>
                    <MDBInput type="textarea" label='Email' value={email} onChange={(e)=>setEmail(e.target.value)}required/>
                </div>
                    
                    <br/>
                <div style={{ width:'500px', marginLeft:'50px' }}>
                    <MDBInput type="textarea" label='College' aria-label="With textarea" value={college} onChange={(e)=>setCollege(e.target.value)} required />
                </div> 
                    
                    <br/> 
                <div style={{ width:'500px', marginLeft:'50px' }}>
                    <MDBInput type="textarea" label='University' aria-label="With textarea"  value={university} onChange={(e)=>setUniversity(e.target.value)} required />
                </div>
                    
                    <br/> 
                <div style={{ width:'500px', marginLeft:'50px' }}>
                    <MDBInput type="password" label='Password' aria-label="With textarea" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                    
                    <br/> 
                <div style={{ width:'500px', marginLeft:'50px' }}>
                    <MDBInput type="password" label='Confirm Password' aria-label="With textarea"  value={Confirm_password} onChange={(e)=>setConfirm_password(e.target.value)} required />
                </div>
                    
                    <br/>
                    <p className={`${!match && Confirm_password && password ? styles.active : styles.hide}`}>Passwords do not match!</p>
                    <input type="submit" className={styles.btn}  value='SignUp' />
                    <br/>
                    Already have an Account?<Link to='/signin_student'>SignIn</Link>
                </form>
            </div>
        </div>
    )
}

export default Contact;