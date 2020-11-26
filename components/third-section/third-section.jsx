import React from "react";
import Styles from "./third-section.module.scss";
import Carrousel from "../carrousel/carrousel.component";

const ThirdSection = () => {
  return (
    <div className={Styles.thirdContainer}>
      <div className={Styles.third}>
        <dir className={Styles.videoSection}>
          <Carrousel />
         
        </dir>
      </div>
     
    </div>
  );
};

export default ThirdSection;
