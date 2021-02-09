import React, {useState, useEffect} from "react";
import s from './ProfileInfo.module.css';

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    let activateStatusMode = () => {
        setEditMode(true)
    }
    let deactivateStatusMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {
                !editMode &&
                <div>
                    <span onDoubleClick={activateStatusMode}>{status || '-------'}</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true}
                           onBlur={deactivateStatusMode} value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatus