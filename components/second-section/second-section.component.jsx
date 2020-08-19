import React from 'react';
import IntroImg from '../img-container/img-container.component';
import ArrowDown from '../arrow-down/arrow-down.component';
import style from './second-section.module.scss';
import ImgAbout from '../img-about/img-about.component';
import ImgAboutContainer from '../img-about-container/img-about-container.component';
import TextAbout from '../text-about/text-about.component';

const SecondSection = (props) =>{
    const {section} = props;
    return (
    <div className={style.second}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"></link>
        <ImgAboutContainer/>
            <TextAbout/>
        
    </div>
)}

export default SecondSection;