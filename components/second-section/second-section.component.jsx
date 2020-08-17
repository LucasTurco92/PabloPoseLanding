import React from 'react';
import IntroImg from '../img-container/img-container.component';
import ArrowDown from '../arrow-down/arrow-down.component';
import style from './second-section.module.scss';

const SecondSection = (props) =>{
    const {section} = props;
    return (
    <div >
        <div >
            <picture>
                <IntroImg srcImg='/second/second.jpeg' altImg='Pablo Pose intense' />
            </picture>
                <ArrowDown  id='secondSection' nextSection='intro' />
        </div>
    </div>
)}

export default SecondSection;