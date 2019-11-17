import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import FriendsContainer from './FriendsContainer';

const Nav = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.menu}>
                <div className={classes.pattern}>
                    <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.pattern}>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
                </div>
                <div className={classes.pattern}>
                    <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
                </div>
                <div className={classes.pattern}>
                    <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
                </div>
                <div className={classes.pattern + ' ' + classes.findUsers}>
                    <NavLink to="/users" activeClassName={classes.active}>Find Users</NavLink>
                </div>
                <div className={classes.pattern}>
                    <NavLink to="/settings" activeClassName={classes.active}>Setting</NavLink>
                </div>
            </div>
            <div className={classes.sectionGuys}>
                <h3>Friends</h3>
                <FriendsContainer />
            </div>
        </nav>
    );
};

export default Nav;