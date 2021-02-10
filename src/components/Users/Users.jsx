import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount}
                       pageSize={pageSize} onPageChanged={onPageChanged}/>
            {
                users.map(users =>
                    <User followingInProgress={props.followingInProgress} key={users.id}
                                         followCreator={props.followCreator} users={users}
                                         unfollowCreator={props.unfollowCreator} />
                                         )
            }
        </div>
    )
}

export default Users