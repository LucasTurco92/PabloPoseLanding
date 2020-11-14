import React from 'react';
import style from './text-about.module.scss';
import HeaderAbout from '../header-about/header-about.component';

const TextAbout = () => {

    return (
        <div className={style.textAbout}>
            <div className={style.text}>
                <div className={style.textContent}>
                 <HeaderAbout/>
                    <p>Nace en A Coruña en 1981, sus primeros contactos con el mundo de la interpretación tienen lugar en su colegio durante una obra musical para el carnaval del centro en el que cantaba disfrazado de gallo. Pero la decisión de dedicarse de lleno a la interpretación llega a la edad de 30 años cuando ve un anuncio en prensa sobre el casting para formar parte de la primera promoción de una nueva escuela de interpretación en su ciudad, era “ahora o nunca” y decide apartar sus estudios de Fisioterapia en la Universidad de A Coruña para dedicarse de lleno a la actuación es ahí en el 2012 donde empieza todo.</p>
                </div>
            </div>
        </div>
    )
}


export default TextAbout;