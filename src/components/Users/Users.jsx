import React from "react";
import style from './Users.module.css'
import userPhoto from '../../assets/images/User.png'

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
                        return (
                            <span className={props.currentPage === p && style.selectedPage} onClick={() => {
                                props.onPageChanged(p)
                            }}>{p}</span>
                        )
                    })
                }
            </div>
            {
                props.users.map(users => <div key={users.id}>
                        <span>
                            <div>
                                <img src={userPhoto} className={style.photo} alt=''/>
                            </div>
                            <div>
                                {users.follow
                                    ? <button onClick={() => {
                                        props.unfollow(users.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(users.id)
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

export default Users