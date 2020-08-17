import React from 'react';
import styles from './arrow-down.module.scss';
import Link from 'next/link'

const ArrowDown = (props) =>{ 
const {nextSection, id} = props;

return(
<div id={id} >
    <Link href={`#${nextSection}`}>
        <span className={styles.arrow} ><img src='/arrow/arrow.svg' /></span>
    </Link>
</div>
)}

export default ArrowDown;