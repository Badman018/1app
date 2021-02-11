const SEND_MESSAGE = 'messenger/dialogs/SEND_MESSAGE'

export const sendMessageCreator = (body) => ({
    type: SEND_MESSAGE, body
})

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.body
            let newMessage = {id: state.messages.length + 1, message: body}
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }
        default: return state
    }
}

export default dialogsReducer;