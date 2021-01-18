import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPost = (props) => {
    let postsElements = props.posts.map( p => <Post text={p.text} likes={p.likes}/>)
    let newPostElement = React.createRef();

    let addPost = () => {
        //props.addPost()
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let newPost = newPostElement.current.value;
        //props.updatePostText(newPost)
        let action = updateNewPostTextActionCreator(newPost)
        props.dispatch(action)
    }

    return (
        <div className={s.content}>
            <div className={s.myPost}>
                <h3>My post</h3>
            </div>
            <div className={s.submitPost}>
                <div>
                    <textarea ref={ newPostElement } onChange={onPostChange} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add</button>
                </div>
            </div>
            <div>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPost;