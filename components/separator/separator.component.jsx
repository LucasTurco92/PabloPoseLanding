import React from 'react';
import Styles from './separator.module.scss';

const Separator = ({style}) =>(<div className={`${Styles.separator} ${style}` } />)

export default Separator;