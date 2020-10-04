import React from 'react';
import Social from '../social/social.component';
import styles from './navbar.module.scss';


const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poiret+One&display=swap" rel="stylesheet"/>

            <h1 ><span className={styles.name}>Pablo Pose</span><span className={styles.profesion}> </span></h1>
            <Social/>
        </div>
    )
}

export default Navbar;