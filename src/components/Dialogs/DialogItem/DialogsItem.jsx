import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

class DialogsItem extends React.Component {
    render() {
        this.path = '/dialogs/' + this.props.id;
        return (
            <div className={s.dialog}>
                <NavLink to={this.path} activeClassName={s.activeDialog}>{this.props.name}</NavLink>
            </div>
        )
    }
}

export default DialogsItem;