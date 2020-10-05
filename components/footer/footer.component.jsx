import React from 'react';
import styles from './footer.module.scss';

const Footer = () =>{
    return(
        <div className={styles.footer}>
            <div  className={styles.op}>
            <a href="https://tempweb.com.ar"> <img src="/logo/logo.png"></img></a>
            </div>
        </div>
        )
};

export default Footer;

