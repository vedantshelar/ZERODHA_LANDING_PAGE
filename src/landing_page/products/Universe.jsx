import styles from "./Universe.module.css";
import React from 'react';

function Universe() {
    return ( 
        <div id={styles.universeMainContainer}>
            <div id={styles.universeHeroSection}>
                <h3>The Zerodha Universe</h3>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div id={styles.universeProductSection}>
                <div className={styles.universeProductBox}>
                    <img src="media/images/zerodhaFundhouse.png" alt="product img" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dignissimos aliquam nihil quis</p>
                </div>
                <div className={styles.universeProductBox}>
                    <img src="media/images/sensibullLogo.svg" alt="product img" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dignissimos aliquam nihil quis</p>
                </div>
                <div className={styles.universeProductBox}>
                    <img src="media/images/tijori.svg" alt="product img" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dignissimos aliquam nihil quis</p>
                </div>
                <div className={styles.universeProductBox}>
                    <img src="media/images/streakLogo.png" alt="product img" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dignissimos aliquam nihil quis</p>
                </div>
                <div className={styles.universeProductBox}>
                    <img src="media/images/smallcaseLogo.png" alt="product img" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dignissimos aliquam nihil quis</p>
                </div>
                <div className={styles.universeProductBox}>
                    <img src="media/images/dittoLogo.png" alt="product img" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dignissimos aliquam nihil quis</p>
                </div>
            </div>
            <div id={styles.universeBtnSection}>
                <button>Sign up for free</button>
            </div>
        </div>
     );
}

export default Universe;