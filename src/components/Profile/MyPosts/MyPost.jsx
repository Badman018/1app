import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {
    let postsElements = props.posts.map( p => <Post text={p.text} likes={p.likes}/>)
    return (
        <div className={s.content}>
            <div className={s.myPost}>
                <h3>My post</h3>
            </div>
            <div className={s.submitPost}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
            { postsElements }
        </div>
    )
}

export default MyPost;