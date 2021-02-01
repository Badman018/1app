import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import {Redirect} from "react-router";

class Dialogs extends React.Component {
    onSendMessage = () => {
        this.props.sendMessage();
    }
    onUpdateMessageBody = (e) => {
        let body = e.target.value;
        this.props.updateMessageBody(body)
    }

    render() {
        this.dialogsElements = this.props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);
        this.messageElements = this.props.dialogsPage.messages.map(m => <MessageItem message={m.message}/>);
        this.newMessageBody = this.props.dialogsPage.newMessageBody;

        if(!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <div className={s.dialogs}>
                <div className={s.dialogNav}>
                    {this.dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>
                        {this.messageElements}
                    </div>
                    <div>
                        <div><textarea value={this.newMessageBody} onChange={this.onUpdateMessageBody}
                                       placeholder='Enter tour message' className={s.textArea}/></div>
                        <div>
                            <button onClick={this.onSendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Dialogs;