import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return (
            <Preloader/>
        )
    }
    return (
        <div className={s.content}>
            {/*<div>
                <img src='https://static01.nyt.com/images/2019/11/05/science/28TB-SUNSET1/merlin_163473282_fe17fc6b-78b6-4cdd-b301-6f63e6ebdd7a-superJumbo.jpg'
                     height='500px' alt='' />
            </div>*/}
            <div className={s.descriptionContent}>
                <img src={props.profile.photos.small} alt='' />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;