import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileInfoApi} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
        isAuth: state.auth.isAuth
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfileInfoApi})(WithUrlDataContainerComponent)