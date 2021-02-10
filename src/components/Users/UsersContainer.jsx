import React from 'react';
import {connect} from "react-redux";
import {
    follow, followCreator, getUsersCreator,
    setCurrentPage, setFollowingInProgress,
    unfollow, unfollowCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import style from './Users.module.css'
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getFollowingInProgress,
    getIsFetching,
    getPage,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersCreator(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching ?
                <div className={style.preloaderDiv}>
                    <Preloader/>
                </div> : <Users {...this.props} onPageChanged={this.onPageChanged}/>
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow,
        setCurrentPage, setFollowingInProgress,
        getUsersCreator, unfollowCreator, followCreator}),
    withAuthRedirect)
(UsersContainer);