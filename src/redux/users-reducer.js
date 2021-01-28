const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const STATUS_IS_FETCHING = 'STATUS_IS_FETCHING'

export const follow = (userId) => ({type: FOLLOW, userId: userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsers = (users) => ({type: SET_USERS, users: users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount})
export const setStatusIsFetching = (isFetching) => ({type: STATUS_IS_FETCHING, isFetching: isFetching})

let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map( users => {
                    if(users.id === action.userId) {
                        return {...users, follow: true}
                    }
                    return users
                })
            }
        }
        case STATUS_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        }
        case SET_USERS: {
            return {
                ...state, users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map( users => {
                    if(users.id === action.userId) {
                        return {...users, follow: false}
                    }
                    return users
                })
            }
        }
        default: return state
    }
}

export default usersReducer;