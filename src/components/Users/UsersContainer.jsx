import React from 'react';
import {connect} from "react-redux";
import {followActionCreator, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowActionCreator} from "../../redux/users-reducer";
import Users from "./Users";
import axios from "axios";

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(10)
            })
    }
    onPageChanged = (pageNumber) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
        this.props.setCurrentPage(pageNumber)
    }
    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      users={this.props.users}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUserCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }

    }
}

const UsersContainerConnect = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export default UsersContainerConnect;