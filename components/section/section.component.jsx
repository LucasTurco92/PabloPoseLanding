import React from 'react';
import style from './section.module.scss';

const Section = (props) => {
const {section} = props;
     return (
        <div id={`${section}`} className={style.section}>
             {props.children}
        </div>
    )}


export default Section;