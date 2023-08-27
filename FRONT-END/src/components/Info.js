// ̥import React from 'react'
import styles from "./Info.module.css"
import i3 from "./images/i3.jpeg";
const Info = () => {
  return (
      <div className={styles.destination}>
      <h1>A Leading Equity<br></br> CrowdFunding Platform</h1>
      <p>Get a glimpse into the rise of equity crowdfunding and the<br></br>
      platform that is helping raise big bucks for highly vetted startups
      </p>
      <div className={styles.first_des}>
        <div className={styles.des_text}>
          <h2>Welcome to our innovative startup funding website</h2>
          <p>We understand that every great idea needs a solid foundation to flourish,
           and that's where we step in. Our platform is designed to bridge the gap between aspiring entrepreneurs and potential investors, 
            creating a dynamic ecosystem of growth and prosperity.
           At our startup funding website, we believe that innovation knows no bounds. 
           Whether you're a visionary entrepreneur with a groundbreaking concept or an investor seeking the next big thing, 
           we've got you covered. Our user-friendly interface makes the funding process seamless, guiding you every step of the way.</p>
        </div>
           <div className={styles.image_out}>
           <img alt="im-out" src={i3}/>
           </div>
      </div>
      </div>
  )
}

export default Info