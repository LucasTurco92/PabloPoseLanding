import React from 'react';
import Icon from "../icon/icon.component";
import styles from './footer.module.scss';

const Footer = () =>{
    return(
        <div className={styles.footer}>
            <div  className={styles.op}>
                <Icon alt='tempweb' source='/logo/logo.png' url=''/>
            </div>
        </div>
        )
};

export default Footer;

