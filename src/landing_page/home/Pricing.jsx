import styles from "./Pricing.module.css";
import React from 'react';

 function Pricing() {
    return ( 
       <div id={styles.pricingMainContainer}> 
            <div id={styles.pricingInfoContainer}>
                <h1>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a id={styles.pricingLink} href="#">See pricing <i className="fa-solid fa-arrow-right-long"></i></a>
            </div>
            <div id={styles.pricingNumbersContainer}>
                <div className={styles.pricingNumberBox}>
                    <img src="media/images/pricing0.svg" alt="pricing0.svg" />
                    <p>Free account <br /> opening</p>
                </div>
                <div className={styles.pricingNumberBox}>
                    <img src="media/images/pricing0.svg" alt="pricing0.svg" />
                    <p>Free equity delivery
                    and direct mutual funds</p>
                </div>
                <div className={styles.pricingNumberBox}>
                    <img src="media/images/other-trades.svg" alt="pricing0.svg" />
                    <p> Intraday and <br />F&O</p>
                </div>
            </div>
       </div>
     );
 }
 
 export default Pricing;

