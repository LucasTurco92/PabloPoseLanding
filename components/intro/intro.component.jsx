import React from 'react';
import IntroContent from '../intro-content/intro-content.component';
import ImgContainer from '../img-container/img-container.component';
import styles from './intro.module.scss';

const Intro = () => (
    <div >
        <div >
            <IntroContent />
            <picture>
                <ImgContainer srcImg='/intro/portada.jpeg' altImg='Pablo Pose' />
                <div className={styles.imgIntro} />
            </picture>
        </div>
    </div>
)

export default Intro;