import styles from "./Team.module.css";
import React from 'react';

function Team() {
    return (
        <div id={styles.teamMainContainer}>
            <div id={styles.teamProfileContainer}>
                <img src="media/images/nithinKamath.jpg" alt="nithinKamath.jpg img" />
                <p>Nithin Kamath</p>
                <p>Founder, CEO</p>
            </div>
            <div id={styles.teamInfoContainer}>
                <h3>People</h3>
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry. <br /> <br />

                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). <br /> <br />

                    Playing basketball is his zen. <br /> <br />

                    Connect on Homepage / TradingQnA / Twitter</p>
            </div>
        </div>
    );
}

export default Team;