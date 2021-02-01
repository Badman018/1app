import './App.css';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from "./components/Navbar/Nav";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
                    <Route path='/dialogs' render={ () => <DialogsContainer />} />
                    <Route path='/users' render={ () => <UsersContainer />} />
                    <Route path='/login' render={ () => <Login />} />
                    {/*<Route path='/music' component={Music} />
                    <Route path='/news' component={News} />
                    <Route path='/settings' component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
