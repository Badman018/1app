import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength15, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsContols/FormsControls";

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
                <Field validate={[required, maxLength15]} component={Textarea} name='newPostText'
                       placeholder='Post message'/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'addPostForm'})(AddPostForm)

export default MyPost;