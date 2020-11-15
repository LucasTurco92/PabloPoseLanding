import React from 'react';
import IntroContent from '../intro-content/intro-content.component';
import Styles from './intro.module.scss';

const Intro = () => (
    <div >
        <div >
            <IntroContent />
            <picture>
                <img className={Styles.image} src='/intro/portada2.jpeg' alt='Pablo Pose' />
                <div className={Styles.imgIntro} />
            </picture>
        </div>
    </div>
)

export default Intro;