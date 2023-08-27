// ̥import React from 'react'
import styles from "./Section.module.css"
import {BiLogoDiscord} from 'react-icons/bi';
import {BiLogoFacebookCircle} from 'react-icons/bi';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {BiPhoneCall} from 'react-icons/bi';
import {AiOutlineMail} from 'react-icons/ai';
import {CiLocationOn} from 'react-icons/ci';

const Section = () => {
  return (
    <div className={styles.End}>
    <div className={styles.Footer}>
      <div className={styles.container}>
      <div className={styles.row}>
        <div className="col-md-6 col-lg-5 col-12 ft-1">
          <h3> Investup</h3>
          <p>A Leading Equity <br></br>CrowdFunding Platform</p>
          <i className={styles.Discord}><BiLogoDiscord /></i>
          <i className={styles.Facebook}><BiLogoFacebookCircle /></i>
          <i className={styles.Twitter}><AiFillTwitterCircle/></i>
        </div>
      <div className="col-md-6 col-lg-3 col-12 ft-2">
        <h5>Quick Links</h5>
        <ul>
          <li className="nav-item">
            <a className={styles.ql} href="/">Services</a>
          </li>
          <li className="nav-item">
            <a className={styles.ql} href="/">Chat</a>
          </li>
          <li className="nav-item">
            <a className={styles.ql} href="/">About</a>
          </li>
        </ul>
      </div>
      <div className="col-md-6 col-lg-4 col-12 ft-3">
        <h5>Contact Info</h5>
        <p className={styles.phone}> <BiPhoneCall/> +91 8834082548</p>
        <p className={styles.mail}> <AiOutlineMail/> Investup@gmail.com</p>
        <p className={styles.location}> <CiLocationOn/> Noida,India</p>
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}
export default Section  