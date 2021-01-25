import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";

const MyPostContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    let onPostChange = (newPost) => {
                        let action = updateNewPostTextActionCreator(newPost)
                        store.dispatch(action)
                    }
                    return (
                        <MyPost addPost={addPost} updatePostText={onPostChange}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>
        )
}

export default MyPostContainer;