import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = 'SET_USERS_DATA'
const SET_AUTH_USER_ID = 'SET_AUTH_USER_ID'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    authId: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_AUTH_USER_ID: {
            return {
                ...state,
                authId: action.authId
            }
        }
        default:
            return state
    }
}

export const setUsersData = (id, email, login, isAuth) => ({type: SET_USERS_DATA, data: {id, email, login, isAuth}})
export const setAuthUserId = (authId) => ({type: SET_AUTH_USER_ID, authId})
export const setUsersDataApi = () => (dispatch) => {
    usersAPI.getUsersData()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setUsersData(id, email, login, true))
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUsersDataApi())
                dispatch(setAuthUserId(response.data.data.userId))
            } else {
                dispatch(stopSubmit('login', {_error: 'Common error'}))
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUsersData(null, null, null, false))
            }
        })
}

export default authReducer;