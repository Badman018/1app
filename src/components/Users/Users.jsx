import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import style from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount}
                       pageSize={pageSize} onPageChanged={onPageChanged}/>
            {
                props.isFetching ?
                <div className={style.preloaderDiv}>
                    <Preloader/>
                </div> : users.map(users =>
                    <User followingInProgress={props.followingInProgress} key={users.id}
                                         followCreator={props.followCreator} users={users}
                                         unfollowCreator={props.unfollowCreator} />
                                         )
            }
        </div>
    )
}

export default Users