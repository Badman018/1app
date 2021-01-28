import React from 'react';
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageAC,
    setStatusIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowActionCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import axios from "axios";
import style from './Users.module.css'
import preloader from './../../assets/images/loader.svg'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setStatusIsFEtching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setStatusIsFEtching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(10)
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setStatusIsFEtching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setStatusIsFEtching(false)
                this.props.setUsers(response.data.items)
            })
        this.props.setCurrentPage(pageNumber)
    }
    render() {
        return <>
            { this.props.isFetching ?
                <div className={style.preloaderDiv}>
                    <img src={preloader} alt='' className={style.preloaderImg}/>
                </div> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          onPageChanged={this.onPageChanged}
                          unfollow={this.props.unfollow}
                          follow={this.props.follow}
                          users={this.props.users}
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
        isFetching: state.usersPage.isFetching
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
        },
        setStatusIsFEtching: (isFetching) => {
            dispatch(setStatusIsFetchingAC(isFetching))
        }

    }
}

const UsersContainerConnect = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export default UsersContainerConnect;