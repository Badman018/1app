import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";

class MyPost extends React.Component {
    onAddPost = () => {
        this.props.addPost()
    }
    onPostChange = () => {
        let newPost = this.newPostElement.current.value;
        this.props.updatePostText(newPost)
    }
    render() {
        this.postsElements = this.props.posts.map( p => <Post text={p.text} likes={p.likes}/>)
        this.newPostElement = React.createRef();
        return (
            <div className={s.content}>
                <div className={s.myPost}>
                    <h3>My post</h3>
                </div>
                <div>
                    <div>
                        <textarea ref={ this.newPostElement } onChange={ this.onPostChange } value={ this.props.newPostText } />
                    </div>
                    <div>
                        <button onClick={ this.onAddPost }>Add</button>
                    </div>
                </div>
                <div>
                    { this.postsElements }
                </div>
            </div>
        )
    }
}

export default MyPost;