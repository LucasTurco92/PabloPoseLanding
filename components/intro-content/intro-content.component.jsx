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