import React from 'react';
import s from './MyPost.module.css';

const MyPost = () => {
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

export default MyPost;