import styles from "./Hero.module.css";
import React from 'react';

function Hero() {
    return ( 
        <div id={styles.heroMainContainer}>
            <div id={styles.heroContainer1}>
                <h1>Charges</h1>
                <p>List of all charges and taxes</p>
            </div>  
            <div id={styles.heroContainer2}>
                <div className={styles.heroContainer2Box}>
                    <img src="media/images/pricing0.svg" alt="pricing0.svg" />
                    <h3>Free equity delivery</h3>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className={styles.heroContainer2Box}>
                    <img src="media/images/other-trades.svg" alt="pricingEquity" />
                    <h3>Free equity delivery</h3>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className={styles.heroContainer2Box}>
                    <img src="media/images/pricing0.svg" alt="pricing0.png" />
                    <h3>Free equity delivery</h3>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;