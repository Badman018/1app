import React from 'react';
import s from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} addPost={props.addPost} updatePostText={props.updatePostText}/>
        </div>
    )
}

export default Profile;