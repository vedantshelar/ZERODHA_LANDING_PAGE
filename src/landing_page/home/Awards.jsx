import styles from "./Awards.module.css";
import React from 'react';

function Awards() {
    return ( 
        <div id={styles.awardsMainContainer}>
            <div id={styles.awardsImgContainer}>
                <img id={styles.awardsImg} src="media/images/largestBroker.svg" alt="largestBroker img" />
            </div>
            <div id={styles.awardsInfoContainer}>
                <div id={styles.awardsDescriptionContainer}>
                    <h1>Largest stock borker in india</h1>
                    <p>2+ million Zerodha client contribute to over 15% of all retial order volumes in india daily by trading and investing in:</p>
                </div>
                <div id={styles.awardsFeatureMainContainer}>
                    <ul id={styles.awardsFeatureContainer1}>
                        <li>Futures and Options</li>
                        <li>Commodity derivatives</li>
                        <li>Currency derivatives</li>
                    </ul>
                    <ul id={styles.awardsFeatureContainer2}>
                        <li>Stocks & IPOs</li>
                        <li>Direct mutual funds</li>
                        <li>Bonds and Government</li>
                    </ul>
                </div>
                <div id={styles.logosContainer}>
                    <img src="media/images/pressLogos.png" alt="pressLogos img" />
                </div>
            </div>
        </div>
     );
}

export default Awards;
