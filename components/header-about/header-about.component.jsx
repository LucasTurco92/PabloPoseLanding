import React from 'react';
import styles from './header-about.module.scss';

const HeaderAbout = () => (
    <div className={styles.container}>
        <div className={styles.headerAbout}>
            <h1><span className={styles.name}>Pablo Pose</span><br/></h1> 
            <span className={styles.profession}>Actor y Doblaje</span> 
            <br/>
            <span><img className={styles.mask} src='/about-title-back/theater-masks.svg' />  <img className={styles.mic} src='/mic/mic.svg' /> </span>
        </div>

    </div>

)

export default HeaderAbout;


