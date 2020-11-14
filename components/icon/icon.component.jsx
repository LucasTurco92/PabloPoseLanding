import React from 'react';
import Styles from './icon.module.scss';

const Icon = ({alt,style,source,url}) =>{
    return(
        <a href={url} className={`${Styles.icon} ${style}`}><img src={source} alt={alt} /></a>     
)}

export default Icon;