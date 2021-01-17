let rerenderTree = (state) => {}

let state = {
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
}

window.state = state;

export const updatePostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderTree(state)
}

export const addPost = () => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        text: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderTree(state);
}

export const subscribe = (observer) => {
    rerenderTree = observer;
}

export default state;