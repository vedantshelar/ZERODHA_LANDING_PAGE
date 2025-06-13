import styles from "./Hero.module.css";
import React from 'react';

function Hero() {
    return ( 
        <div id={styles.heroMainContainer}>
            <div id={styles.heroContainer1}>
                <span>Support Portal</span>
                <a href="#">Track tickets</a>
            </div>
            <div id={styles.heroContainer2}>
                <div id={styles.heroContainer2Box1}>
                    <p>Search for an answer or browse help topics to create a ticket</p>
                    <input type="text" placeholder="Eg: how do i active F&Q, why is my order getting rejected ..." />
                    <div>
                    <a href="#">Track account opening</a>
                    <a href="#">Track segment activation</a>
                    <a href="#">Intraday margins</a>
                    <a href="#">Kite user manual</a>
                    </div>
                </div>
                <div id={styles.heroContainer2Box2}>
                    <h3>Featured</h3>
                    <ol>
                        <li><a href="#">Adjustment of F&O contracts of BAJFINANCE on account of bonus and split</a></li>
                        <li><a href="#">Surveillance measure on scrips - June 2025</a></li>
                    </ol>
                </div>
            </div>
        </div>
     );
}

export default Hero;