import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
        return (
            <div className={s.content}>
                <ProfileInfo profile={props.profile}/>
                <MyPostContainer />
            </div>
        )
}

export default Profile;