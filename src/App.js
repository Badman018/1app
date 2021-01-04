import './App.css';
import React from 'react';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Header/>
            <Body/>
            <Body/>
        </div>
    );
};

const Header = () => {
    return (
        <div className="Header">
            <p color='black'>PAGE YOPTA</p>
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
