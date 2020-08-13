import React from 'react';
import styles from './intro-content.module.scss';

const IntroContent = () => (
    <div className={styles.introContent}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@500;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy:ital@1&display=swap" rel="stylesheet"></link>
        <div className={styles.firstSection}>
            <span className={styles.firstPartFrase}>❝</span>
            <span className={styles.secondPartFrase}>Working on</span>
        </div>
        <div  className={styles.secondSection}>
            <span className={styles.thirdPartFrase}>my Dreams Towards</span>
        </div>
        <div  className={styles.thirdSection}>
            <span className={styles.fourthPartFrase}>...My Destination</span>
            <span className={styles.fifthPartFrase}>"</span>
        </div>
    </div>
)

export default IntroContent;