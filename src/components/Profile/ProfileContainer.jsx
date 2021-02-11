import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfileInfoApi, savePhoto, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfileInfo() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authId
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileInfoApi(userId)
        this.props.getStatus(userId)
    }
    componentDidMount() {
        this.refreshProfileInfo()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfileInfo()
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} isOwner={!!this.props.match.params.userId} savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        authId: state.auth.authId
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfileInfoApi, getStatus, updateStatus, savePhoto}),
    withRouter
)(ProfileContainer)