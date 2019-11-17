import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '438d83de-a62f-4369-866b-e91fc61d9c5e'
    }
});

const instanceImg = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/photos'
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response;
            })
    },

    deleteUnfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    postFollow(userId) {
        return instance.post(`follow/${userId}`)
    },

    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response;
            })
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },

    savePhoto(filePhotos) {
        const formData = new FormData();
        formData.append("image", filePhotos);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response;
            })
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {
            email, password, rememberMe
        })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const photoAPI = {
    getNews() {
        return instanceImg.get('?albumId=1')
            .then(response => {
                return response;
            })
    },

    getNewContent(pageNumber) {
        return instanceImg.get(`/${pageNumber}`)
            .then(response => {
                return response;
            });
    }
}
