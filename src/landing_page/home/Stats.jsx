import styles from "./Stats.module.css";
import React from 'react';

function Stats() {
    return ( 
       <div id={styles.statsMainContainer}>
            <div id={styles.statsInfoContainer}>
                <h1>Trust with confidence</h1>
                <div id={styles.statsInfoInnerContainer}>
                    <div className={styles.statsInfoBox}>
                        <h3>Customer-first always</h3>
                        <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className={styles.statsInfoBox}>
                        <h3>No spam or gimmicks</h3>
                        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>
                    <div className={styles.statsInfoBox}>
                        <h3>The Zerodha universe</h3>
                        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className={styles.statsInfoBox}>
                        <h3>Do better with money</h3>
                        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
            </div>
            <div id={styles.statsImgAndLinksContainer}>
                <div id={styles.statsImgContainer}>
                    <img id={styles.statsImg} src="media/images/ecosystem.png" alt="ecosystem img" />
                </div>
                <div id={styles.statsLinksContainer}>
                    <a className={styles.statsLinks} href="#">Explore our products <i className="fa-solid fa-arrow-right-long"></i></a>
                    <a  className={styles.statsLinks} href="#">Try kite demo <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
       </div>
     );
}

export default Stats;