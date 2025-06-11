import styles from "./Hero.module.css";
import React from 'react';

function Hero() {
    return (
        <div id={styles.heroMainContainer}>
            <div id={styles.heroContainer1}>
                <h1>We pioneered the discount broking model in India.
                    Now, we are breaking ground with our technology.</h1>
            </div>
            <div id={styles.heroContainer2}>
                <div>
                    We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier. <br /> <br />
                    Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India. <br /> <br />
                    Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                </div>
                <div>
                    In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors. <br /> <br />
                    Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets. <br /> <br />
                    And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.
                </div>
            </div>
        </div>
    );
}

export default Hero;