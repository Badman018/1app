import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (newPost) => {
        let action = updateNewPostTextActionCreator(newPost)
        props.store.dispatch(action)
    }

    return (<MyPost addPost={addPost} updatePostText={onPostChange}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText} />)
}

export default MyPostContainer;