import {setUsersDataApi} from "./auth-reducer";

const INIT_APP = 'messenger/app/INIT_APP'

let initialState = {
    init: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_APP: {
            return {
                ...state,
                init: true
            }
        }
        default:
            return state
    }
}

export const initSuccess = () => ({type: INIT_APP})
export const initApp = () => (dispatch) => {
    let promise = dispatch(setUsersDataApi)
    Promise.all([promise])
        .then(
            dispatch(initSuccess())
        )
}
export default appReducer;