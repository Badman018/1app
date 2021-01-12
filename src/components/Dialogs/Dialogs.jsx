import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Matvei'},
        {id: 2, name: 'Stas'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Name'}
    ]
    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Qq'},
        {id: 3, message: 'HAU?'},
        {id: 4, message: 'Hi'},
        {id: 5, message: 'Yo'}
    ]

    let dialogsElements = dialogs.map( d => <DialogsItem name={d.name} id={d.id}/>);
    let messageElements = messages.map( m => <MessageItem message={m.message}/>);

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