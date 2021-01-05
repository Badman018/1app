import './App.css';
import React from 'react';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className='header'>
                <img src='https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_4.png' alt=''/>
            </header>
            <nav className='nav'>
                <div>
                    <a href='#'>Profile</a>
                </div>
                <div>
                    <a href='#'>Messages</a>
                </div>
                <div>
                    <a href='#'>Music</a>
                </div>
                <div>
                    <a href='#'>News</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src='https://static01.nyt.com/images/2019/11/05/science/28TB-SUNSET1/merlin_163473282_fe17fc6b-78b6-4cdd-b301-6f63e6ebdd7a-superJumbo.jpg' height='500px' alt='' />
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
        </div>
    );
};

export default App;
