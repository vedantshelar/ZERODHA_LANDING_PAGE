import styles from "./OpenAccout.module.css";
import React from 'react';

function OpenAccount() {
    return ( 
        <div id={styles.openAccountMainContainer}>
            <h1>Open a Zerodha account</h1>
            <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <button>Sign up for free</button>
        </div>
     );
}

export default OpenAccount;