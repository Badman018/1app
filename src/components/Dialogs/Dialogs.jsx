import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogNav}>
                <div className={s.dialog }>
                    <NavLink to='/dialogs/1' activeClassName={s.activeDialog}>Matvei</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2' activeClassName={s.activeDialog}>Stas</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3' activeClassName={s.activeDialog}>Sanya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4' activeClassName={s.activeDialog}>Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5' activeClassName={s.activeDialog}>Chel</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Yo</div>
                <div className={s.message}>Hello</div>
            </div>
        </div>
    )
}

export default Dialogs;