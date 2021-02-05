import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import {Field, reduxForm} from "redux-form";
import {maxLength15, required} from "../../utils/validators/validator";
import {Textarea} from "../common/FormsContols/FormsControls";

class Dialogs extends React.Component {
    onSendMessage = (values) => {
        this.props.sendMessageCreator(values.newMessageBody);
    }

    render() {
        this.dialogsElements = this.props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);
        this.messageElements = this.props.dialogsPage.messages.map(m => <MessageItem message={m.message}/>);
        this.newMessageBody = this.props.dialogsPage.newMessageBody;
        return (
            <div className={s.dialogs}>
                <div className={s.dialogNav}>
                    {this.dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>
                        {this.messageElements}
                    </div>
                    <AddMessageFormRedux onSubmit={this.onSendMessage}/>
                </div>
            </div>
        )
    }
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newMessageBody' placeholder='Enter your message'
                       className={s.textArea} validate={[required, maxLength15]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm)

export default Dialogs;