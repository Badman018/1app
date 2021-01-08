import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.content}>
            <div className={s.item}>
                Post {props.name}
            </div>
            <div className={s.item}>
                Post
            </div>
        </div>
    )
}

export default Post;