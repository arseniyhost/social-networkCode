import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import { updateStatus, getStatus, savePhoto } from './../../../Redux/profilePage-reducer';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

const ProfileInfoContainer = (props) => {
    return (
        <ProfileInfo isOwner={props.isOwner}
            updateStatus={props.updateStatus}
            getStatus={props.getStatus}
            savePhoto={props.savePhoto}
            {...props}
        />
    )
}

export default connect(mapStateToProps, { updateStatus, getStatus, savePhoto })(ProfileInfoContainer);
