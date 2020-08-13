import React from 'react';
import IntroImg from '../intro-image/intro-image.component'
import styles from './intro.module.scss';

const Intro = () => (
    <div>
        <div className={styles.intro}>
                <picture>
                    <IntroImg />
                </picture>         
        </div>
    </div>
)

export default Intro;