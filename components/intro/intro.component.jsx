import React from 'react';
import IntroContent from '../intro-content/intro-content.component';
import Separator from '../separator/separator.component';
import Styles from './intro.module.scss';

const Intro = () => (
    <div >
        <div >
            <IntroContent />
                <img className={Styles.image} src='/intro/portada2.jpeg' alt='Pablo Pose' />
                <Separator style={Styles.separator}/>
        </div>
    </div>
)

export default Intro;