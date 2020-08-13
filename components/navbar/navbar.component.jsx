import React from 'react';
import styles from './navbar.module.scss';

const Navbar = () => (
    <div  className={styles.navbarContainer}>    
            <h1 className={styles.name}> Pablo Pose</h1>
            <h1 className={styles.profesion}> Actor y Doblaje</h1>
    </div>
)

export default Navbar;