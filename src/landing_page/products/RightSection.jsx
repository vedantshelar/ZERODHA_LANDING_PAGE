import styles from "./LeftSection.module.css";
import React from 'react';

function RightSection({ mainImg, heading, description, links }) {
    return (
        <div className={styles.leftSectionMainContainer}>
            <div className={styles.leftSectionInfoContainer}>
                <h3>{heading}</h3>
                <p>{description}</p>
                <div className={styles.leftSectionLinksContainer}>
                    {
                        links.map((linkObj, indx) => {
                            return (<a className={styles.leftSectionLinks} href={linkObj.link}>{linkObj.text} <i className="fa-solid fa-arrow-right-long"></i></a>);
                        })
                    }
                </div>
            </div>
            <div className={styles.leftSectionImgContainer}>
                <img src={mainImg} alt="img" />
            </div>
        </div>
    );
}

export default RightSection;