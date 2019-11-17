import React from 'react';
import style from '../News/News.module.css';
import { NavLink } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';


const News = (props) => {
    if (!props.news) {
        return <Preloader />
    }
    return (
        <div className={style.blockNews}>
            <div className={style.box}>
                <div className={style.title}><h2>{props.title}</h2></div>
                <div className={style.news}>
                    {props.news.map((n) => {
                        return <div className={style.newsContent}>
                            <h2>{n.title}</h2>
                            <div className={style.photoNew}><img src={`https://picsum.photos/id/${n.id}/400/250`} alt="thum" /></div>
                            <NavLink to={"/newcontent/" + n.id} onClick={((e) => { props.onPageNewContent(n.id)})}>read more</NavLink>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default News;