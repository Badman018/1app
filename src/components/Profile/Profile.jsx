import React from 'react';
import s from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost posts={props.state.posts}/>
        </div>
    )
}

export default Profile;