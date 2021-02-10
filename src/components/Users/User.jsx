import React from "react";
import style from './Users.module.css'
import userPhoto from '../../assets/images/User.png'
import {NavLink} from "react-router-dom";


const User = ({users, followingInProgress, unfollowCreator, followCreator}) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + users.id}>
                        <img src={users.photos.small != null ? users.photos.small : userPhoto}
                             className={style.photo} alt=''/>
                                </NavLink>
                </div>
                <div>
                    {users.followed
                        ? <button disabled={followingInProgress.some(id => id === users.id)}
                                  onClick={() => {
                                      unfollowCreator(users.id)
                                  }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === users.id)}
                                  onClick={() => {
                                      followCreator(users.id)
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

export default User