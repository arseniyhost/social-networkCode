import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return(
        <div className={style.item}>
            <img className={style.photo} src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png" alt="ava"/>
            <p className={style.like}>Likes: {props.like}</p>
            <p>{props.message}</p>
        </div>
    );
};

export default Post;