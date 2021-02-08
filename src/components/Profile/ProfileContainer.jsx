import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfileInfoApi, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
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
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
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
    connect(mapStateToProps, {getUserProfileInfoApi, getStatus, updateStatus}),
    withRouter
)(ProfileContainer)