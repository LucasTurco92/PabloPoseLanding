import React, { useState, useEffect } from "react";
import Styles from "./loader.module.scss";

const Loader = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
      setIsLoaded(true);
  }, []); 
  return (
    <div>
      {!isLoaded ? (
        <div className={Styles.container}>
          <div className={Styles.square}>
            <span className={Styles.item}></span>
            <span className={Styles.item}></span>
            <span className={Styles.item}></span>

            <span className={Styles.item}></span>
            <span className={Styles.item}></span>
            <span className={Styles.item}></span>

            <span className={Styles.item}></span>
            <span className={Styles.item}></span>
            <span className={Styles.item}></span>
          </div>
        </div>
      ) : (
        props.children
      )}
    </div>
  );
};

export default Loader;
