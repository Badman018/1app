import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = 'SET_USERS_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state
    }
}

export const setUsersData = (id, email, login, isAuth) => ({type: SET_USERS_DATA, data: {id, email, login, isAuth}})
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