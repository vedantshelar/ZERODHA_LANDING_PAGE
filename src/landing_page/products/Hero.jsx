import styles from "./Hero.module.css";
import React from 'react';

function Hero() {
    return ( 
        <div id={styles.HeroMainContainer}>
            <h1>Zerodha Products</h1>
            <p>Sleek, modern, and intuitive trading platforms</p>
            <p>Check out our <a id={styles.heroLink} href="#">investment offerings <i className="fa-solid fa-arrow-right-long"></i></a></p>
        </div>
     );
}

export default Hero;