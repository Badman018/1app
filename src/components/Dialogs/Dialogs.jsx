import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map( d => <DialogsItem name={d.name} id={d.id}/>);
    let messageElements = props.state.messages.map( m => <MessageItem message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogNav}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }
            </div>
        </div>
    )
}

export default Dialogs;