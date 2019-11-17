import React from 'react';
import { MyPostContainer } from './MyPost/MyPostContainer';
import ProfileContainer from './ProfileInfo/profileContainer';

const Content = React.memo((props) => {
    return (
        <div>
            <ProfileContainer isOwner={props.isOwner} profile={props.profile} />
            <MyPostContainer />
        </div>
    );
});

export default Content;