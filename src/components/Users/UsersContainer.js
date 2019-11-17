import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import style from './Users.module.css';
import { follow, unfollow, getUsersThunk } from '../../Redux/usersPage-reducer';
import Preloader from '../Preloader/Preloader';
import { compose } from 'redux';
import { getUsers, getTotalUsers, getPageSize, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../Redux/selectors/selectors';


class UsersContainer extends React.Component {

    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.getUsersThunk(currentPage, pageSize);
    }

    onPageChange = (pageNumber) => {
        const { getUsersThunk, pageSize } = this.props;
        getUsersThunk(pageNumber, pageSize);
    }

    render() {
        return (
            <div>
                <div className={style.title}><h2>users</h2></div>
                {this.props.isFetching ? <Preloader isFetching={this.props.isFetching} /> : null}
                <Users
                    onPageChange={this.onPageChange}
                    users={this.props.users}
                    totalUsers={this.props.totalUsers}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    progressFollowing={this.props.followingInProgress}
                    toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsers: getTotalUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    connect(mapStateToProps, { follow, unfollow, getUsersThunk })
)(UsersContainer)
