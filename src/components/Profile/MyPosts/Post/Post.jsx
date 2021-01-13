import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.content}>
            <div className={s.item}>
                <div>
                    {props.text}
                </div>
                <div>
                    likes = {props.likes}
                </div>
            </div>
        </div>
    )
}

export default Post;