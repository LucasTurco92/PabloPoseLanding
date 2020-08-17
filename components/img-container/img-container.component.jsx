import React from 'react';
import styles from './img-container.module.scss';

const ImgContainer = (props) =>{
    const{srcImg, altImg, imgPosition} = props;
    return(
    <img className={styles.imgContainer} src={srcImg}  alt={altImg} />
)}

export default ImgContainer;