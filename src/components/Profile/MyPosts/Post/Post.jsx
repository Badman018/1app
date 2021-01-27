import React from 'react';
import s from './Post.module.css';

class Post extends React.Component {
    render() {
        return (
            <div className={s.content}>
                <div className={s.item}>
                    <div>
                        {this.props.text}
                    </div>
                    <div>
                        likes = {this.props.likes}
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;