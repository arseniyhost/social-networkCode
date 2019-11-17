import React from 'react';
import loading from './../../assets/images/loading.svg';
import style from './Preloader.module.css';

const Preloader = (props) => {
    return(
        <div>
            <div className={style.loading}> <img src={loading} alt="preloader" /> </div>
        </div>
    );
}

export default Preloader;