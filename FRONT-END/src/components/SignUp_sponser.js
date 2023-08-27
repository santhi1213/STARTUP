import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp_sponser.module.css"
import { Link } from "react-router-dom";
import signsponser from "./images/signsponser.png"
import { useState } from "react";
import { MDBInput } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [profession,setProfession]=useState("");
    const [password,setPassword]=useState("");
    const [Confirm_password,setConfirm_password]=useState("");
    const [match, setMatch] = useState(false);
    const navigate = useNavigate();

    const collectData=async(event)=>{
        event.preventDefault()
        if (!match) console.log("Passwords do not match");
        else{
        console.log(name,email,profession,password,Confirm_password);
        let result =await fetch('http://localhost:5000/investor',{
            method:'post',
            body: JSON.stringify({name,email,profession,Confirm_password}),
            headers:{
                'Content-Type':'application/json'
            },
        })
        result =await result.json()
        console.log(result);
        localStorage.setItem("user",result,JSON.stringify(result));
        if(result)
        {
          navigate('/')
        }
    }
}
useEffect(() => {
    const checkMatch = password === Confirm_password;
    setMatch(checkMatch); 
}, [password,Confirm_password])
    return(
        <div className={styles.wrapper}>
            <img src={signsponser} className={styles.signsponser} />
            <div className={styles.login2}>
                <h1 className={styles.mb-3}>SignUp as Sponser</h1>
                <form  onSubmit={collectData}>      
                    <div style={{ width:'500px', marginLeft:'50px' }}>
                        <MDBInput type="textarea" label='Name' aria-label="With textarea" id='formWhite' value={name} onChange={(e)=>setName(e.target.value)} className={styles.inputs} required />
                    </div>             
                                          
                        <br/>
                    <div style={{ width:'500px', marginLeft:'50px' }}>
                        <MDBInput type="text" label='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                    </div>                                            
                                           
                        <br/>
                    <div style={{ width:'500px', marginLeft:'50px' }}>
                        <MDBInput type="textarea" label='Profession' aria-label="With textarea" value={profession} onChange={(e)=>setProfession(e.target.value)} className={styles.inputs}  required/>
                    </div> 
                        
                        <br/>
                    <div style={{ width:'500px', marginLeft:'50px' }}>
                        <MDBInput type="password" label='Password' aria-label="With textarea"  value={password} onChange={(e)=>setPassword(e.target.value)} className={styles.inputs} required />
                    </div> 
                        
                        <br/>
                    <div style={{ width:'500px', marginLeft:'50px' }}>
                        <MDBInput type="password" label='Confirm Password' aria-label="With textarea"  value={Confirm_password} onChange={(e)=>setConfirm_password(e.target.value)} className={styles.inputs} required />
                    </div> 
                        
                        <br/>
                        <p className={`${!match && Confirm_password && password ? styles.active : styles.hide}`}>Passwords do not match!</p>
                        <input type="submit" className={styles.btn}   value='SignUp' />
                        <br/>
                    Already have an Account?<Link to='/signin_sponser'>SignIn</Link>
                </form>
            </div>
        </div>
    )
}

export default Contact;