import React from 'react';
import style from './third-section.module.scss';
import VideoContainer from '../video-container/video-container.component';

const ThirdSection = () => {
    return (
        <div className={style.thirdContainer}>
            <div className={style.third}>     
                <dir className={style.videoSection}>
                <VideoContainer url='/esperanza.mp4'  title='Esperanza' />
                <VideoContainer url='/caso.mp4'  title='O caso Diana Quer'/>
                <VideoContainer url='/secuencia.mp4' title='479' />
                </dir>
            </div>
        </div>
    )
}

export default ThirdSection;