import React from "react"
// import Button from 'react-bootstrap/Button'; 
import styles from "./homestyle.module.css";
import Info from "./Info"
import Hero from "./Hero"
import Hexa from "./Hexa"
import Section from "./Section"
const Home = ()=>{
    return(
        <nav className={styles.home}>
            <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj3wDv0XNKX7X5F0dIg_whNBJvSSni2Lf7Zw&usqp=CAU"></img>
        
            <h1 className={styles.head}>Investup Together</h1>
            <p className={styles.Para}>Raise Funding Invest in startups.<br></br>
              <p>Secure & Transparent Technology platform</p></p>
            <h3 className={styles.para_first}>Find Investors</h3>
              <h3 className={styles.para_second}>Investment Opportunities</h3>
              </div>
              <Info />
              <Hero/>
              <Hexa />
              <Section />
        </nav>
        

    )
}

export default Home;