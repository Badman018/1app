const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

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
            ],
            newMessageBody: ''
        }
    },
    getState() {
        return this._state;
    },

    _subscribeCall() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._subscribeCall = observer; //observer
    },

    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                text: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._subscribeCall(this._state);
        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._subscribeCall(this._state)
        } else if(action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: this._state.profilePage.posts.length + 1, message: body})
            this._subscribeCall(this._state)
        }  else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._subscribeCall(this._state)
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
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export default store;
window.store = store;


