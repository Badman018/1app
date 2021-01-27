import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogsItem name={d.name} id={d.id}/>);
    let messageElements = props.dialogsPage.messages.map( m => <MessageItem message={m.message}/>);
    let newMessageBody = props.dialogsPage.newMessageBody;
    let newMessageElement = React.createRef();

    let onSendMessage = () => {
        props.sendMessage();
    }
    let onUpdateMessageBody = () => {
        let body = newMessageElement.current.value;
        props.updateMessageBody(body)
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
                    <div><textarea ref={newMessageElement} value={newMessageBody} onChange={onUpdateMessageBody} placeholder='Enter tour message' className={s.textArea}/></div>
                    <div><button onClick={onSendMessage}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;