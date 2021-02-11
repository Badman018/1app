import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import userDefaultPhoto from '../../../assets/images/User.png'

const ProfileInfo = ({isOwner, profile, updateStatus, status, savePhoto}) => {
    if(!profile) {
        return (
            <Preloader/>
        )
    }
    const onChangeProfilePhoto = (e) => {
        if(e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={s.content}>
            <div className={s.descriptionContent}>
                <img src={profile.photos.large || userDefaultPhoto} alt='' className={s.userPhoto} />
                { !isOwner && <input type='file' onChange={onChangeProfilePhoto} />}
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;