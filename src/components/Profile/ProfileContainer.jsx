import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileInfoApi} from "../../redux/profile-reducer";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) { userId = 2 }
        this.props.getUserProfileInfoApi(userId)
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfileInfoApi})(WithUrlDataContainerComponent)