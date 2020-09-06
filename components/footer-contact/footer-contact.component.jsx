import React from 'react';
import styles from './footer-contact.module.scss';

const FooterContact = () => (
    <div className={styles.container}>
        <div className={styles.icons}>
            <ul>
                <li><a href="https://twitter.com/posepablo?lang=es " className={styles.twitter}><img src='/socialIcons/twitter-brands.svg' alt="twitter" /></a></li>
                <li><a href="https://www.facebook.com/pablo.poseiglesias.1 " className={styles.facebook}> <img src='/socialIcons/facebook-f-brands.svg' alt="facebook" /></a></li>
                <li><a href="https://www.instagram.com/pablopose_/?hl=es " className={styles.instagram}> <img src='/socialIcons/instagram-brands.svg' alt="instagram" /></a></li>
            </ul>
        </div>
    </div>
)

export default FooterContact;