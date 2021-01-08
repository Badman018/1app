import React from 'react';
import s from './MyPost.module.css';

const MyPost = (props) => {
    return (
        <div className={s.content}>
            <div className={s.item}>
                My post, {props.name}
            </div>
            <div className={s.item}>
                My post
            </div>
        </div>
    )
}

export default MyPost;