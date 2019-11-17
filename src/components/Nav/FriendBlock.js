import React from 'react';
import Friends from '../Friends/Friends';
import classes from './Nav.module.css';

const FriendBlock = (props) => {
    let guysElements = props.friend.map( g => {
        return <Friends name={g.name} key={g.id} />
    });
    return(
        <div className={classes.containerFriends}>
            { guysElements }
        </div>
    );
}

export default FriendBlock;

