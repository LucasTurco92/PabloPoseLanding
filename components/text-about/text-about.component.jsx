import React from 'react';
import style from './text-about.module.scss';
import HeaderAbout from '../header-about/header-about.component';

const TextAbout = () => {

    return (
        <div className={style.textAbout}>
            <div className={style.text}>
                <div className={style.textContent}>
                 <HeaderAbout/>
                    <p>Nací en A Coruña en 1981, donde mis primeros contactos con el mundo de la interpretación tienen lugar en el colegio, cantaba disfrazado de gallo durante una obra musical para el carnaval del centro. Pero la decisión de dedicarme de lleno a la interpretación llega a la edad de 30 años cuando ví un anuncio en prensa sobre el casting para formar parte de la primera promoción de una nueva escuela de interpretación en la ciudad, era <b>“ahora o nunca”</b> y medecidí. Aparté mis estudios de Fisioterapia de la Universidad de A Coruña para dedicarme de lleno a la actuación en el 2012. Mi narración habia comenzado.</p>
                </div>
            </div>
        </div>
    )
}


export default TextAbout;