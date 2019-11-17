import React from 'react';
import style from './Users.module.css';
import Paginator from './Paginator';
import User from './User';

const Users = (props) => {
    let portionSize;
    return (
        <div className={style.containerUsers}>
            <Paginator
                totalItemCount={props.totalUsers}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChange={props.onPageChange}
                portionSize={portionSize}
            />
            {props.users.map((u) => {
                return <User
                    user={u}
                    key={u.id}
                    progressFollowing={props.progressFollowing}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />
            })}
        </div>
    );
}

export default Users;