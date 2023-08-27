import React from "react";
import about from "./images/about.png";
import styles from "./about.module.css";   
import startup from "./images/startup.jpg"


function About(){
    return(
        <>
        <div className={styles.about_page}>
            <h1 style={{ marginTop:'0px' }}>What we are?</h1>
            <img src={about} className={styles.about} />
            <div className={styles.data}>
                
                <img src={startup} className={styles.startup} />
                <h1 className={styles.title}>Making Startups easier for every student..</h1>

                <p className={styles.text}>Hello guys!<br/>We are the innovators trying to develop a bridge to help the students
                who got interest with startup ideas.  We're creating a social networking site for providing connection between
                students and the persons who are willing to invest in startup plans.
                <br/><br/>In recent years, the startups have stood out as one of the main contributors to the global economy 
                and a source of employment around the world. Likewise, the number of support to startups also increased. 
                Investors and organizations are increasingly interested in help business to achieve success. <br/><br/>
                For an entrepreneur who is to start your business is important to know first what are the support 
                to startups existing. In addition, it is necessary to identify how and when they provide this support, 
                in order to ensure that when this help, the entrepreneur will know where to go. </p>

            </div><br/><br/><br/>
            ________________________________________________________________________________________________________________________________________________________________________________________________
            <br/><br/><br/><br/>
            <div className={styles.footer}>
                <i class="fa-brands fa-square-facebook"></i> 
                <i class="fa-brands fa-instagram"></i> 
                <i class="fa-brands fa-youtube"></i> 
                <i class="fa-brands fa-twitter"></i> 
                <i class="fa-brands fa-linkedin"></i>
            </div>
            <p>Copyright <i class="fa-sharp fa-regular fa-copyright"></i> 2023 StartHub, Inc.</p>
            </div>
        </>
      
    )
}

export default About;