import React from 'react';
import '../App.css';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src='https://static01.nyt.com/images/2019/11/05/science/28TB-SUNSET1/merlin_163473282_fe17fc6b-78b6-4cdd-b301-6f63e6ebdd7a-superJumbo.jpg' height='500px' width='100%' alt='' />
            </div>
            <div>
                Photo + descripton
            </div>
            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;