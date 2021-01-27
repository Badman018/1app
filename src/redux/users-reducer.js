const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export const followActionCreator = (userId) => ({type: FOLLOW, userId: userId})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsersAC = (users) => ({type: SET_USERS, users: users})

let initialState = {
    users: []
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
        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
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