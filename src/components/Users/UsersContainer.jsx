import React from 'react';
import {connect} from "react-redux";
import {
    follow, followCreator, getUsers,
    setCurrentPage, setFollowingInProgress,
    unfollow, unfollowCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import style from './Users.module.css'
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching ?
                <div className={style.preloaderDiv}>
                    <Preloader/>
                </div> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
                   users={this.props.users}
                   setFollowingInProgress={this.props.setFollowingInProgress}
                   unfollowCreator={this.props.unfollowCreator}
                   followCreator={this.props.followCreator}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const UsersContainerConnect = connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setFollowingInProgress,
    getUsers,
    unfollowCreator,
    followCreator
})(UsersContainer)

export default UsersContainerConnect;