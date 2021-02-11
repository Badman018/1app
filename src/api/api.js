import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c7f706ea-4502-472c-9d93-04e489a6d958'
    }
})

export const usersAPI = {
    getUsersRequest(currentPage = 1, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getUsersData() {
        return instance.get(`auth/me`)
    },
    getUserProfileInfo(userId) {
        return profileAPI.getUserProfileInfo(userId)
    }
}

export const profileAPI = {
    getUserProfileInfo(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status })
    },
    setProfilePhotos(file) {
        const formData = new FormData()
        formData.append("image", file)
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": 'multipart/from-date'
            }
        })
    }
}

export const authAPI = {
    login(email, password, rememberMe = true) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
