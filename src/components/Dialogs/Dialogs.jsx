import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map( d => <DialogsItem name={d.name} id={d.id}/>);
    let messageElements = props.state.messages.map( m => <MessageItem message={m.message}/>);
    let newMessageBody = props.state.newMessageBody;
    let newMessageElement = React.createRef();

    let onSendMessage = () => {
        props.dispatch(sendMessageCreator())
    }
    let updateMessageBody = () => {
        let body = newMessageElement.current.value;
        let action = updateNewMessageBodyCreator(body)
        props.dispatch(action)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogNav}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>
                    { messageElements }
                </div>
                <div>
                    <div><textarea ref={ newMessageElement } value={ newMessageBody } onChange={ updateMessageBody } placeholder='Enter tour message'></textarea></div>
                    <div><button onClick={ onSendMessage }>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;