import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

class MyPost extends React.Component {
    onAddPost = (values) => {
        debugger
        this.props.addPost(values.newPostText)
    }
    render() {
        this.postsElements = this.props.posts.map( p => <Post text={p.text} likes={p.likes}/>)
        return (
            <div className={s.content}>
                <div className={s.myPost}>
                    <h3>My post</h3>
                </div>
                <AddPostFormRedux onSubmit={this.onAddPost}/>
                <div>
                    { this.postsElements }
                </div>
            </div>
        )
    }
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPostText' placeholder='Matvei qq'/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'addPostForm'})(AddPostForm)

export default MyPost;