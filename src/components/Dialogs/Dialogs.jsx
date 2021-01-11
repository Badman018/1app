import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog }>
            <NavLink to={path} activeClassName={s.activeDialog}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={s.personMessage}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogNav}>
                <DialogItem name='Matvei' id='1'/>
                <DialogItem name='Stas' id='2'/>
                <DialogItem name='Dima' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Danik' id='5'/>
                <DialogItem name='Egor' id='6'/>
            </div>
            <div className={s.messages}>
                <MessageItem message='Hello'/>
                <MessageItem message='HAU?'/>
                <MessageItem message='Fine'/>
            </div>
        </div>
    )
}

export default Dialogs;