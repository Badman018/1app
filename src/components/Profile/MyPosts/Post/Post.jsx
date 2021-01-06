import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.content}>
            <div className={s.item}>
                Post 1
            </div>
            <div className={s.item}>
                Post 1
            </div>
        </div>
    )
}

export default Post;