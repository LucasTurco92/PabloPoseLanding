import React, { useState, useMemo } from "react";
import { useScrollPosition } from "../commons/scroll-position.jsx";
import Styles from "./navbar.module.scss";
import SocialIcons from "../social-icons/social-icons.component";

const Navbar = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const style = {
    true: Styles.navbarScrollOn,
    false: Styles.navbarScrollOff,
  };
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow =
        currPos.y > prevPos.y || (currPos.y > -250 && currPos.y < 1);
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    null,
    false,
    300
  );

  return useMemo(() => (
    <div className={style[hideOnScroll]}>
      <div className={Styles.navbarContainer}>
        <h1>
          <span className={Styles.name}>Pablo Pose</span>
        </h1>
        <div className={Styles.socialContainer}>
          <SocialIcons />
        </div>
      </div>
    </div>
  ));
};

export default Navbar;
