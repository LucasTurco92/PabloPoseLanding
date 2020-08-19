import React from 'react';
import styles from './img-about.module.scss';

const ImgAbout = (props) =>{
    const{srcImg, altImg} = props;
    return(
    <img className={styles.imgAbout} src={srcImg}  alt={altImg} />
)}

export default ImgAbout;