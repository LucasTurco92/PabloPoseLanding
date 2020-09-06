import React from 'react';
import style from './text-about.module.scss';
import HeaderAbout from '../header-about/header-about.component';

const TextAbout = () => {

    return (
        <div className={style.textAbout}>
            <div className={style.text}>
                <div className={style.textContent}>
                 <HeaderAbout/>
                    <p>Looriosam maxime, perferendis commodi voluptatem accusamus quis autem id vitae? Minima consequatur saepe iure harum culpa quod perferendis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto sapiente maiores, atque, voluptate, eaque ut eos cumque nesciunt qui earum in velit omnis eveniet tempore. Nemo in error nostrum non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro et officia consequuntur. Fuga, molestiae maiores iusto aliquam aperiam sit distinctio ullam veritatis porro at dolorum excepturi quod repellendus vel quisquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, commodi possimus, doloremque libero blanditiis voluptatum excepturi perspiciat</p>
                </div>
            </div>
        </div>
    )
}


export default TextAbout;