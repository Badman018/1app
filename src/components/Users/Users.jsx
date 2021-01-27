import React from "react";
import style from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/User.png'

class Users extends React.Component {
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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {
                        pages.map( p => {
                            return (
                                <span className={this.props.currentPage === p && style.selectedPage} onClick={ () => { this.onPageChanged(p) } }>{p}</span>
                            )
                        })
                    }
                </div>
                {
                    this.props.users.map(users => <div key={users.id}>
                        <span>
                            <div>
                                <img src={userPhoto} className={style.photo} alt=''/>
                            </div>
                            <div>
                                {users.follow
                                    ? <button onClick={() => {
                                        this.props.unfollow(users.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(users.id)
                                    }}>Follow</button>
                                }
                            </div>
                        </span>
                            <span>
                            <span>
                                <div>{users.name}</div>
                                <div>{users.status}</div>
                            </span>
                            <span>
                                <div>{'users.location.country'}</div>
                                <div>{'users.location.city'}</div>
                            </span>
                        </span>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Users