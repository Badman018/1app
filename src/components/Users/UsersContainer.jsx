import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setFollowingInProgress,
    setStatusIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import style from './Users.module.css'
import Preloader from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setStatusIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setStatusIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(10)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setStatusIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setStatusIsFetching(false)
                this.props.setUsers(data.items)
            })
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
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setStatusIsFetching,
    setFollowingInProgress
})(UsersContainer)

export default UsersContainerConnect;