import React from 'react';
import ImgAbout from '../img-about/img-about.component';
import styles from './img-about-container.module.scss';

const ImgAboutContainer = () =>
    (
        <div className={styles.imgAboutContainer} >
            <ImgAbout srcImg='/second/about.jpeg' altImg='about' />
     
        </div>
    )

export default ImgAboutContainer;