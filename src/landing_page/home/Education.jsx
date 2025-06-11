import styles from "./Education.module.css";
import React from 'react';

function Education() {
    return ( 
        <div id={styles.educationMainContainer}>
            <div id={styles.educationImgContainer}>
                <img id={styles.educationImg} src="media/images/education.svg" alt="education.svg" />
            </div>
            <div id={styles.educationInfoContainer}>
                <h1>Free and open market education</h1>
                <div className={styles.educationInfoBox}>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a className={styles.edcationInfoLink} href="#">Varsity <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className={styles.educationInfoBox}>
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a className={styles.edcationInfoLink} href="#">TradingQ&A <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;