import React from 'react';
import styles from './social-icons.module.scss';

const SocialIcons = () => (
    <div className={styles.icons}>
                <ul>
                    <li><a href="https://twitter.com/posepablo?lang=es " className={styles.twitter}><img src='/socialIcons/twitter-brands.svg' alt="twitter" /></a></li>
                    <li><a href="https://www.facebook.com/pablo.poseiglesias.1 " className={styles.facebook}> <img src='/socialIcons/facebook-f-brands.svg' alt="facebook" /></a></li>
                    <li><a href="https://www.instagram.com/pablopose_/?hl=es " className={styles.instagram}> <img src='/socialIcons/instagram-brands.svg' alt="instagram" /></a></li>
                    <li><a href="https://www.facebook.com/pablo.poseiglesias.1 " className={styles.linkedIn}> <img src='/socialIcons/linkedin-brands.svg' alt="facebook" /></a></li>
                    <li><a href="https://www.instagram.com/pablopose_/?hl=es " className={styles.youtube}> <img src='/socialIcons/youtube-brands.svg' alt="instagram" /></a></li>
                </ul>
            </div>
)

export default SocialIcons;

