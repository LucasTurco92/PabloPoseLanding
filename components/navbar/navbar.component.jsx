import React from 'react';
import styles from './navbar.module.scss';


const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <h1 ><span className={styles.name}>Pablo Pose</span><span className={styles.profesion}> </span></h1>
            
        </div>
    )
}

export default Navbar;