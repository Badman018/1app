import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'messenger/profile/ADD-POST'
const SET_USERS_PROFILE = 'messenger/profile/SET_USERS_PROFILE'
const SET_STATUS = 'messenger/profile/SET_STATUS'
const SET_PROFILE_PHOTOS = 'messenger/profile/SET_PROFILE_PHOTOS'

let initialState = {
    posts: [
        {id: 1, text: 'Hello', likes: 12},
        {id: 2, text: 'Helloo', likes: 15},
        {id: 3, text: 'Hellooo', likes: 23},
        {id: 4, text: 'bTDjgpSY5_j_ABq', likes: 1200}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                text: action.newPostText,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case SET_USERS_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        case SET_PROFILE_PHOTOS: {
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setProfilePhotos = (photos) => ({type: SET_PROFILE_PHOTOS, photos})
export const getUserProfileInfoApi = (userId) => (dispatch) => {
    usersAPI.getUserProfileInfo(userId)
        .then(response => {
            dispatch(setUsersProfile(response.data))
        })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.setProfilePhotos(file)
    if (response.data.resultCode === 0) {
        dispatch(setProfilePhotos(response.data.data.photos))
    }
}


export default profileReducer;