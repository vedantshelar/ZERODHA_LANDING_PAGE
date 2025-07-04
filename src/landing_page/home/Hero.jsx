import React from 'react';
import styles from "./Hero.module.css";
function Hero() {
    return ( 
        <div id={styles.heroMainContainer}>
            <div id={styles.heroImgContainer}>
                <img id={styles.heroImg} src="media/images/homeHero.png" alt="homeHero Img" />
            </div>
            <div id={styles.heroInfoContainer}>
                <h1>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button><a style={{textDecoration:"none",color:"white"}} href="https://zerodha-dashboard-web.netlify.app">Sign up for free</a></button>
            </div>
        </div>
     );
}

export default Hero;