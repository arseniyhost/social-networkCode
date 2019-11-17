import React from 'react';
import style from './Users.module.css';
import userPhoto from './../../assets/images/userMan.png';
import { NavLink } from 'react-router-dom';

const User = ({ user, progressFollowing, follow, unfollow }) => {
    return (
        <div className={style.blockUser}>
            <div className={style.media}>
                <div className={style.photo}>
                    <NavLink to={'/profile/' + user.id}><img alt="avatar" src={user.photos.large != null ? user.photos.large : userPhoto} /></NavLink>
                </div>
                <div className={style.btn}>
                    {
                        user.followed ?
                            <button disabled={progressFollowing.some(id => (id === user.id))} className={style.follow} onClick={() => {
                                follow(user.id);
                            }
                            }>unfollow</button> :
                            <button disabled={progressFollowing.some(id => (id === user.id))} className={style.unfollow} onClick={() => {
                                unfollow(user.id);
                            }
                            }>follow</button>
                    }
                </div>
            </div>
            <div className={style.userContainer}>
                <div className={style.userAbout}>
                    <div className={style.userName}>
                        <h3>{user.name}</h3>
                    </div>
                    <div>
                        <p>{user.status}</p>
                    </div>
                </div>
                <div className={style.userLocation}>
                    <div className={style.userLocation}>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </div>
            </div>
        </div>
    );
}

export default User;