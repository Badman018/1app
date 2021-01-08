import React from 'react';
import s from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
import Post from "./MyPosts/Post/Post";

const name1 = 'Stas';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://static01.nyt.com/images/2019/11/05/science/28TB-SUNSET1/merlin_163473282_fe17fc6b-78b6-4cdd-b301-6f63e6ebdd7a-superJumbo.jpg'
                     height='500px' alt='' />
            </div>
            <div>
                Photo + descripton
            </div>
            <MyPost name='Matvei'/>
            <Post name={name1}/>
            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div>
                    <div className={s.item}>Post 1</div>
                    <div className={s.item}>Post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;