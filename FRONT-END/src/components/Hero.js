// import React from 'react'
import {BsFillRocketFill} from 'react-icons/bs';
import {BsFillPeopleFill} from 'react-icons/bs';
import {BsCoin} from 'react-icons/bs';
import styles from "./HeroStyles.module.css"
import {BsGraphUpArrow} from 'react-icons/bs'
import {FaHandHoldingUsd} from 'react-icons/fa'
const Hero = () => {
  return (
    <nav>
    <div>
    <div className={styles.people}>
    <BsFillRocketFill />
      <h2 className={styles.num_pe}>1923+</h2>
      <h3 className={styles.text_pe}>Starups<br></br> 
      Registered</h3>
    </div>
    <div className={styles.rocket}>
    <BsFillPeopleFill/>
      <h2 className={styles.num_ro}>4612+</h2>
      <h3 className={styles.text_ro}>Investors on<br></br> 
      platform</h3>
    </div>
    <div className={styles.Bitcoin}>
    <BsCoin/>
      <h2 className={styles.num_bi}>$10+Mn</h2><br></br>
      <h3 className={styles.text_bi}>Funds raised</h3>
    </div>
    </div>
    <div className={styles.graph}>
    <BsGraphUpArrow/>
      <h2 className={styles.num_gr}>200+</h2><br></br>
      <h3 className={styles.text_gr}>Portfolio<br></br>
      value</h3>
    </div>
    <div className={styles.hand}>
    <FaHandHoldingUsd/>
      <h2 className={styles.num_ha}>100+</h2><br></br>
      <h3 className={styles.text_ha}>Investments<br></br>
      made</h3>
      </div>
    </nav>
    
    
  )
}

export default Hero