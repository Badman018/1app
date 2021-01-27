import React from "react";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/User.png'

class Users extends React.Component {
    getUsers = () => {
        if(this.props.users.length === 0) {
            axios.get("https://5f57b53d1a07d600167e732c.mockapi.io/api/v1/users")
                .then(response => {
                    this.props.setUsers(response.data)
                })
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.getUsers}>Get Users</button>
                {
                    this.props.users.map( u => <div key={u.id}>
                        <span>
                            <div>
                                <img src={userPhoto} className={s.photo} alt=''/>
                            </div>
                            <div>
                                { u.follow
                                    ? <button onClick={ () => {this.props.unfollow(u.id)} }>Unfollow</button>
                                    : <button onClick={ () => {this.props.follow(u.id)} }>Follow</button>
                                }
                            </div>
                        </span>
                            <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
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