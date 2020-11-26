import React from "react";
import Loader from "../loader/loader.component";
import Separator from "../separator/separator.component";
import Styles from "./second-section.module.scss";

const SecondSection = () => {
  return (
    <div>
      <div className={Styles.secondContainer}>
        <div className={Styles.second}>
            <img
              className={Styles.imgAbout2}
              src="/second/about2.jpeg"
              alt="pablo"
              />
          <img
            className={Styles.imgAbout}
            src="/second/about.jpeg"
            alt="pablo"
            />
          <div className={Styles.textAboutcontainer}>
            <div className={Styles.headerAbout}>
              <h1>
                <span className={Styles.name}>Pablo Pose</span>
                <br />
              </h1>
              <span className={Styles.profession}>Actor y Doblaje</span>
              <br />
              <span>
                <img
                  className={Styles.mask}
                  src="/about-title-back/theater-masks.svg"
                />{" "}
                <img className={Styles.mic} src="/mic/mic.svg" />{" "}
              </span>
            </div>
            <div className={Styles.text}>
              <p>
                Pablo Pose Nace en A Coruña en 1981, sus primeros contactos con
                el mundo de la interpretación tienen lugar en su colegio durante
                una obra musical para el carnaval del centro en el que cantaba
                disfrazado de gallo. Pero la decisión de dedicarse de lleno a la
                interpretación llega a la edad de 30 años cuando ve un anuncio
                en prensa sobre el casting para formar parte de la primera
                promoción de una nueva escuela de interpretación en su ciudad,
                era “ahora o nunca” y decide apartar sus estudios de
                Fisioterapia en la Universidad de A Coruña para dedicarse de
                lleno a la actuación es ahí en el 2012 donde empieza todo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Separator style={Styles.separator} />
    </div>
  );
};

export default SecondSection;
