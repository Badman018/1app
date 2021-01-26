import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._subscribeCall(this._state)
    }
}

export default store;
window.store = store;


