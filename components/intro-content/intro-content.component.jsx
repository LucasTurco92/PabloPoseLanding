import React, { useState, useMemo } from 'react'
import { useScrollPosition } from '../commons/scroll-position.jsx';
import styles from './intro-content.module.scss';

const IntroContent = () => {
    const [hideOnScroll, setHideOnScroll] = useState(true)
    const styleFirstSection = {
        true: styles.firstSectionOn,
        false: styles.firstSectionOff
    }
    const styleSecondSection = {
        true: styles.secondSectionOn,
        false: styles.secondSectionOff
    }
    const styleThirdSection = {
        true: styles.thirdSectionOn,
        false: styles.thirdSectionOff
    }
    useScrollPosition(
        ({currPos}) => {
            const isShow = currPos.y == 0;
            if (isShow !== hideOnScroll) setHideOnScroll(isShow)
        },
        [hideOnScroll],
        null,
        false,
        300
    )

    return useMemo(
        () => (
            <div className={styles.introContent}>
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@500;700&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy:ital@1&display=swap" rel="stylesheet"></link>
                <div className={styleFirstSection[hideOnScroll]}>
                    <span className={styles.firstPartFrase}>❝</span>
                    <span className={styles.secondPartFrase}>Working on</span>
                </div>
                <div className={styleSecondSection[hideOnScroll]}>
                    <span className={styles.thirdPartFrase}>my Dreams Towards</span>
                </div>
                <div className={styleThirdSection[hideOnScroll]}>
                    <span className={styles.fourthPartFrase}>...My Destination</span>
                    <span className={styles.fifthPartFrase}>"</span>
                </div>
            </div>

        )
    )





}

export default IntroContent;