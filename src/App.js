import './App.css';
import React, { Component } from 'react';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Header/>
            <Body/>
        </div>
    );
};

const Header = () => {
    return (
        <div className="Header">

        </div>
    );
};

const Body = () => {
    return (
        <div className="Header">
            <a href="#">HREF</a>
        </div>
    );
};

export default App;
