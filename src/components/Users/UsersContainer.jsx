import React from 'react';
import {connect} from "react-redux";
import {follow, setCurrentPage, setStatusIsFetching, setTotalUsersCount, setUsers, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import axios from "axios";
import style from './Users.module.css'
import preloader from './../../assets/images/loader.svg'
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setStatusIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setStatusIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(10)
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setStatusIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setStatusIsFetching(false)
                this.props.setUsers(response.data.items)
            })
        this.props.setCurrentPage(pageNumber)
    }
    render() {
        return <>
            { this.props.isFetching ?
                <div className={style.preloaderDiv}>
                    <Preloader />
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

const UsersContainerConnect = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setStatusIsFetching})(UsersContainer)

export default UsersContainerConnect;