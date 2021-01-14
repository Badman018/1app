import './App.css';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile state={props.state.profilePage} />} />
                    <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} />} />
                    {/*<Route path='/music' component={Music} />
                    <Route path='/news' component={News} />
                    <Route path='/settings' component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
