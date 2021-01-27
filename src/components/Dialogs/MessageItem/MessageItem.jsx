import React from 'react';
import s from './../Dialogs.module.css'

class MessageItem extends React.Component {
    render() {
        return (
            <div className={s.personMessage}>{this.props.message}</div>
        )
    }
}

export default MessageItem;