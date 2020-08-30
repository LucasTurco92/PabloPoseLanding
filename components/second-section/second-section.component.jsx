import React from 'react';
import style from './second-section.module.scss';
import ImgAboutContainer from '../img-about-container/img-about-container.component';
import TextAbout from '../text-about/text-about.component';

const SecondSection = () => {
    return (
        <div className={style.secondContainer}>
            <div className={style.second}>
            <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>

                <ImgAboutContainer /><TextAbout />
            </div>

        </div>
    )
}

export default SecondSection;