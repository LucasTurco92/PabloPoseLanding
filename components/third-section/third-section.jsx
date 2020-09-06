import React from 'react';
import style from './third-section.module.scss';
import VideoContainer from '../video-container/video-container.component';

const ThirdSection = (props) => {
    return (
        <div className={style.thirdContainer}>
            <div className={style.third}>     
                <dir className={style.videoSection}>
                <VideoContainer url='/caso.mp4'  title='test' paragraph='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis similique id error, soluta dolorem ad! Placeat totam magni officiis ducimus minus iste, eveniet, voluptatem tempore praesentium illum culpa corporis quam!'/>
                <VideoContainer url='/esperanza.mp4' title='test' paragraph='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis similique id error, soluta dolorem ad! Placeat totam magni officiis ducimus minus iste, eveniet, voluptatem tempore praesentium illum culpa corporis quam!'/>
                <VideoContainer url='/Secuencia479.mp4' title='test' paragraph='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis similique id error, soluta dolorem ad! Placeat totam magni officiis ducimus minus iste, eveniet, voluptatem tempore praesentium illum culpa corporis quam!'/>
                </dir>
            </div>
    
        </div>
    )
}

export default ThirdSection;