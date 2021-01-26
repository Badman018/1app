const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

let initialState = {
    posts: [
        {id: 1, text: 'Hello, dear', likes: 12},
        {id: 2, text: 'Hello, honey', likes: 15},
        {id: 3, text: 'Hello, sweaty', likes: 23},
        {id: 4, text: 'Hello, gay', likes: 1200}
    ],
    newPostText: 'Matvei super'
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        posts: [...state.posts]
    }
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                text: state.newPostText,
                likes: 0
            }
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            stateCopy.newPostText = action.newText;
            return stateCopy
        }
        default:
            return state

    }
}

export default profileReducer;