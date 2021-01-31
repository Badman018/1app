import React from "react";
import style from './Users.module.css'
import userPhoto from '../../assets/images/User.png'
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p && style.selectedPage} onClick={() => {
                            props.onPageChanged(p)
                        }}>{p}</span>
                    })
                }
            </div>
            {
                props.users.map(users => <div key={users.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + users.id}>
                                    <img src={users.photos.small != null ? users.photos.small : userPhoto}
                                         className={style.photo} alt=''/>
                                </NavLink>
                            </div>
                            <div>
                                {users.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === users.id)} onClick={() => {
                                        props.setFollowingInProgress(true, users.id)
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'c7f706ea-4502-472c-9d93-04e489a6d958'
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(users.id)
                                                }
                                                props.setFollowingInProgress(false, users.id)
                                            })
                                    }}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === users.id)} onClick={() => {
                                        props.setFollowingInProgress(true, users.id)
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'c7f706ea-4502-472c-9d93-04e489a6d958'
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(users.id)
                                                }
                                                props.setFollowingInProgress(false, users.id)
                                            })

                                    }}>Follow</button>}
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

export default Users