import React from 'react';
import style from '../News/News.module.css';
import Preloader from '../Preloader/Preloader';

const NewContent = (props) => {
    if (!props.news) {
        return <Preloader />
    }
    debugger
    return (
        <div className={style.ContainerNewContent}>
            <div className={style.newBlock}>
                <h2>{props.news.title}</h2>
                <p>Number article:{props.news.id}</p>
                <div className={style.photoNew}><img src={`https://picsum.photos/id/${props.news.id}/400/250`} alt="thum" /></div>
                <p>{props.news.title}</p>
                <p>{props.news.title}</p>
                <p>{props.news.title}</p>
                <p>{props.news.title}</p>
            </div>
        </div>
    )
}

export default NewContent; 