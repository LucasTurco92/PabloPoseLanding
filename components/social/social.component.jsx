import React from 'react';
import SocialIcons from '../social-icons/social-icons.component';

import styles from './social.module.scss';

const Social = () => (
    <div className={styles.footer}>
        <div className={styles.container}>
            <SocialIcons/>
        </div>
    </div>
)

export default Social;