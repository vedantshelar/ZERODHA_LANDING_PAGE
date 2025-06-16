import styles from "./Navbar.module.css";
import React from 'react';
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    let [isShown, setIsShown] = useState(false);
    function toggleNav() {
        setIsShown((currIsShown) => {
            return !currIsShown;
        })
    }
    return (
        <div id={styles.navBarMainContainer}>
            <div id={styles.navBarLogoContainer}>
                <img id={styles.navBarLogo} src="media/images/logo.svg" alt="Zerodha Logo" />
            </div>
            <nav id={styles.navItemsContainer}>
                <ul id={styles.deskTopView}>
                <a className={styles.navItems} href="https://zerodha-dashboard-web.netlify.app">Signup</a>
                    <NavLink to={"/about"} className={styles.navItems} >About</NavLink>
                    <NavLink to={"/products"} className={styles.navItems} >Products</NavLink>
                    <NavLink to={"/pricing"} className={styles.navItems} >Pricing</NavLink>
                    <NavLink to={"/support"} className={styles.navItems}>Support</NavLink>
                </ul>
                <ul id={styles.mobileView} style={{ display: isShown ? "block" : "none" }}>
                    <div id={styles.mobileViewContainer1}>
                    <a className={styles.navItems} href="https://zerodha-dashboard-web.netlify.app">Signup</a>
                    <NavLink to={"/about"} className={styles.navItems} >About</NavLink>
                    <NavLink to={"/products"} className={styles.navItems} >Products</NavLink>
                    <NavLink to={"/pricing"} className={styles.navItems} >Pricing</NavLink>
                    <NavLink to={"/support"} className={styles.navItems} >Support</NavLink>
                    </div>
                    <div id={styles.mobileViewContainer2}>
                        <a href="https://zerodha-dashboard-web.netlify.app" className={styles.mobileViewContainer2Box} style={{textDecoration:"none"}}>
                            <img src="media/images/kiteLogo.svg" alt="" />
                            <span>Kite</span>
                            <span>Trading Platform</span>
                        </a>
                        <div className={styles.mobileViewContainer2Box}>
                            <img src="media/images/consoleLogo.svg" alt="" />
                            <span>Console</span>
                            <span>BackOffice</span>
                        </div>
                        <div className={styles.mobileViewContainer2Box}>
                            <img src="media/images/kite-connectLogo.svg" alt="img" />
                            <span>Kite Connect</span>
                            <span>Trading APIs</span>
                        </div>
                        <div className={styles.mobileViewContainer2Box}>
                            <img src="media/images/coinLogo.svg" alt="" />
                            <span>Coin</span>
                            <span>Mutual funds</span>
                        </div>
                        <div className={`${styles.mobileViewContainer2Box} ${styles.mobileViewContainer2BoxHidden}`}>
                            <img src="media/images/varsityLogo.png" alt="" />
                            <span>Varsity</span>
                        </div>
                        <div className={`${styles.mobileViewContainer2Box} ${styles.mobileViewContainer2BoxHidden}`}>
                            <img src="media/images/tqnaLogo.png" alt="" />
                            <span>Trading Q&A</span>
                        </div>
                    </div>
                    <div id={styles.mobileViewContainer3}>
                        <div>
                            <h4>Utilities</h4>
                            <a className={styles.navItems} >Calculators</a>
                            <a className={styles.navItems} >Brokerage Calculator</a>
                            <a className={styles.navItems} >Margin Calculator</a>
                            <a className={styles.navItems} >SIP Calculator</a>
                        </div>
                        <div>
                            <h4>Updates</h4>
                            <a className={styles.navItems} >Z-Connect blog</a>
                            <a className={styles.navItems} >Circulars / Bulletin</a>
                            <a className={styles.navItems} >IPOs</a>
                            <a className={styles.navItems} >Markets</a>
                        </div>
                        <div id={styles.mobileViewEducationMainContainer}>
                            <h4>Education</h4>
                            <div id={styles.mobileViewContainer4EducationContainer}>
                                <div>
                                    <img src="media/images/varsityLogo.png" alt="" />
                                    <span>Varsity</span>
                                </div>
                                <div >
                                    <img src="media/images/tqnaLogo.png" alt="" />
                                    <span>Trading Q&A</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
                <div id={styles.navControlsContainer}>
                    <i style={{ display: isShown ? "none" : "block" }} id={styles.bar} className="fa-solid fa-bars" onClick={toggleNav}></i>
                    <i style={{ display: isShown ? "block" : "none" }} id={styles.cross} className="fa-solid fa-xmark" onClick={toggleNav}></i>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;