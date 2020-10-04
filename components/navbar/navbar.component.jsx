import React from 'react';
import SocialIcons from '../social-icons/social-icons.component';

import styles from './navbar.module.scss';


const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poiret+One&display=swap" rel="stylesheet" />

            <h1 ><span className={styles.name}>Pablo Pose</span></h1>
            <div className={styles.socialContainer}>
                <SocialIcons />
            </div>
        </div>
    )
}

export default Navbar;