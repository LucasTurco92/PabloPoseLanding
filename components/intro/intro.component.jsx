import React from 'react';
import IntroImg from '../intro-image/intro-image.component'
import styles from './intro.module.scss';
import IntroContent from '../intro-content/intro-content.component';
import ArrowDown from '../arrow-down/arrow-down.component';

const Intro = () => (
    <div className={styles.intro}>
        <div className={styles.intro}>
        <IntroContent/>    
    
                <picture>
        <ArrowDown/>  
                    <IntroImg/>
                </picture>  
 
        </div>
    </div>
)

export default Intro;