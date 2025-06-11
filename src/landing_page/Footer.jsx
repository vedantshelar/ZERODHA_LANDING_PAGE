import styles from "./Footer.module.css";
import React from 'react';
import { NavLink } from "react-router-dom";

function Footer() {
    return ( 
        <div id={styles.footerMainContainer}>
            <div id={styles.footerImgContainer}>
                <img src="media/images/logo.svg" alt="zerodha logo" />
                <span>© 2010 - 2025, Zerodha Broking Ltd. <br />
                All rights reserved.</span>
            </div>
            <div className={styles.footerInfoContainer}>
                <h3>Account</h3>
                <NavLink className={styles.footerInfoContainerLinks}>Open demat account</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Minor demat account</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>NRI demat account</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Commodity</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Dematerialisation</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Fund transfer</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>MTF</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Referral program</NavLink>
            </div>
            <div className={styles.footerInfoContainer}>
                <h3>Support</h3>
                <NavLink className={styles.footerInfoContainerLinks}>Open demat account</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Minor demat account</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>NRI demat account</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Commodity</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Dematerialisation</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Fund transfer</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>MTF</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Referral program</NavLink>
            </div>
            <div className={styles.footerInfoContainer}>
                <h3>Company</h3>
                <NavLink className={styles.footerInfoContainerLinks}>Open demat account</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Minor demat account</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>NRI demat account</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Commodity</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Dematerialisation</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Fund transfer</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>MTF</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Referral program</NavLink>
            </div>
            <div className={styles.footerInfoContainer}>
                <h3>Quick links</h3>
                <NavLink className={styles.footerInfoContainerLinks}>Open demat account</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Minor demat account</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>NRI demat account</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Commodity</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Dematerialisation</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Fund transfer</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>MTF</NavLink>
                <NavLink className={styles.footerInfoContainerLinks}>Referral program</NavLink>
            </div>
        </div>
     );
}

export default Footer;