import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {
    return (
        <div className={s.content}>
            <div className={s.myPost}>
                <h3>My post, {props.name}</h3>
            </div>
            <div className={s.submitPost}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
            <Post/>
        </div>
    )
}

export default MyPost;