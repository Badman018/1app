import React from 'react';
import s from './../Dialogs.module.css'

const MessageItem = (props) => {
    return (
        <div className={s.personMessage}>{props.message}</div>
    )
}

export default MessageItem;