import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            {/*<Profile/>*/}
            <div className='app-wrapper-content'>
                <Dialogs/>
            </div>
        </div>
    );
};

export default App;
