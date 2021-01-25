import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {
    let postsElements = props.posts.map( p => <Post text={p.text} likes={p.likes}/>)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let newPost = newPostElement.current.value;
        props.updatePostText(newPost)
    }

    return (
        <div className={s.content}>
            <div className={s.myPost}>
                <h3>My post</h3>
            </div>
            <div>
                <div>
                    <textarea ref={ newPostElement } onChange={onPostChange} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ onAddPost }>Add</button>
                </div>
            </div>
            <div>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPost;