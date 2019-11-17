import React from 'react';
import style from './Friends.module.css';

const Friends = (props) => {
    return(
        <div className={style.box}>
            <div className={style.icon}></div>
            <p>{props.name}</p>
        </div>
    );
};

export default Friends;