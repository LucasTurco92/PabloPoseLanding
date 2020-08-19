import React, { useState, useMemo } from 'react'
import { useScrollPosition } from '../commons/scroll-position.jsx';
import Navbar from '../navbar/navbar.component'
import style from './navbar-container.module.scss';

const NavbarContainer = () => {
    const [hideOnScroll, setHideOnScroll] = useState(true)
const styles = {
    true: style.navbarScrollOn,
    false :style.navbarScrollOff
}
    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isShow = currPos.y > prevPos.y && currPos != 0;
            if (isShow !== hideOnScroll) setHideOnScroll(isShow)
        },
        [hideOnScroll],
        null,
        false,
        300
    )

    return useMemo(
        () => (
        <div className={styles[hideOnScroll]}>
            <Navbar  />
        </div>
        )
    )
}


export default NavbarContainer;