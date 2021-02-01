import React from "react";
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateStatusMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateStatusMode() {
        this.setState({
            editMode: false
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateStatusMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateStatusMode.bind(this)} value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus