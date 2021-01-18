const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'Hello, dear', likes: 12},
                {id: 2, text: 'Hello, honey', likes: 15},
                {id: 3, text: 'Hello, sweaty', likes: 23},
                {id: 4, text: 'Hello, gay', likes: 1200}
            ],
            newPostText: 'Matvei super'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Matvei'},
                {id: 2, name: 'Stas'},
                {id: 3, name: 'Dima'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Name'}
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Qq'},
                {id: 3, message: 'HAU?'},
                {id: 4, message: 'Hi'},
                {id: 5, message: 'Yo'}
            ]
        }
    },
    getState() {
        return this._state;
    },

    _rerenderTree() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._rerenderTree = observer;
    },

    addPost() {
        let newPost = {
            id: this._state.profilePage.posts.length + 1,
            text: this._state.profilePage.newPostText,
            likes: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderTree(this._state);
    },
    updatePostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderTree(this._state)
    },

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                text: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerenderTree(this._state);
        } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderTree(this._state)
        }
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default store;
window.store = store;


