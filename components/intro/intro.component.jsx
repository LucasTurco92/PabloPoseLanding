import React from 'react';
import IntroContent from '../intro-content/intro-content.component';
import ArrowDown from '../arrow-down/arrow-down.component';
import ImgContainer from '../img-container/img-container.component';
import style from './intro.module.scss';

const Intro = () => (
    <div >
        <div >
            <IntroContent />
            <picture>
                <ArrowDown  id='intro' nextSection='secondSection' />
                <ImgContainer srcImg='/intro/portada.jpeg' altImg='Pablo Pose' />
            </picture>
        </div>
    </div>
)

export default Intro;