import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import userPhoto from './../../../assets/images/userMan.png';
import ProfileStatusWithHook from '../ProfileStatus/ProfileStatusWithHook';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoChange = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    return (
        <div>
            <div className={style.title}><h2>{props.profilePage.title}</h2></div>
            <div className={style.profile_info}>
                <div className={style.discription}>
                    
                    <div className={style.aboutUser}>
                        <div className={style.changeStatus}>
                            <div className={style.justText}>Status:</div> <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} />
                        </div>
                        <div className={style.aboutHuman}>
                            <p className={style.lookJob}>Looking for a job: {props.profile.lookingForAJob ? <span>Yes</span> : <span>No</span>}</p>
                            <p className={style.lookJob} >Description about a job: {props.profile.lookingForAJobDescription || <span>None</span>}</p>
                            <div>
                                <p>Contacts:</p>
                                <div className={style.links}>
                                    <a href={props.profile.contacts.github}>github</a>
                                    <a href={props.profile.contacts.facebook}>facebook</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.logoNama}>
                        <img className={style.avatar} src={!props.profile.photos.large ? userPhoto : props.profile.photos.large} alt="avatar" />
                        { props.isOwner && <div>
                            <input onChange={onMainPhotoChange} type="file"/>
                        </div> }
                        <h4>{props.profile.fullName}</h4>
                    </div>
                </div>
                <div className={style.textAboutMe}><p><span>About me:</span> <span>{props.profile.aboutMe || <span>Nothing...</span>}</span></p></div>
            </div>
        </div>
    );
};

export default ProfileInfo;