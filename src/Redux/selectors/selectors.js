// SELECTORS FOR USERS_CONTAINER

export const getUsers = (state) => {
    return state.usersPage.users
}

export const getTotalUsers = (state) => {
    return state.usersPage.totalUsers
}

export const getPageSize = (state) => {
    return  state.usersPage.pageSize
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}

// SELECTORS FOR CONTENT_CONTAINER

export const getProfile = (state) => {
    return state.profilePage.profile
}

export const getAuthorizedUserId = (state) => {
    return state.auth.usedId
}