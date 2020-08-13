import React from 'react';
import FooterContact from '../footer-contact/footer-contact.component';
import styles from './footer.module.scss';

const Footer = () => (
    <div className={styles.footer}>
        <FooterContact />
    </div>
)

export default Footer;