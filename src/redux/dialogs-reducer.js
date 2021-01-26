const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
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
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        newMessageBody: state.newMessageBody,
        stateCopy: [...state.messages]
    }

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = stateCopy.newMessageBody
            stateCopy.newMessageBody = ''
            stateCopy.messages.push({id: stateCopy.messages.length + 1, message: body})
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            stateCopy.newMessageBody = action.body
            return stateCopy
        }
        default: return state
    }
}

export default dialogsReducer;