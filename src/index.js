import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, text: 'Hello, dear', likes: 12},
    {id: 2, text: 'Hello, honey', likes: 15},
    {id: 3, text: 'Hello, sweaty', likes: 23},
    {id: 4, text: 'Hello, gay', likes: 1200}
]
let dialogs = [
    {id: 1, name: 'Matvei'},
    {id: 2, name: 'Stas'},
    {id: 3, name: 'Dima'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Name'}
]
let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Qq'},
    {id: 3, message: 'HAU?'},
    {id: 4, message: 'Hi'},
    {id: 5, message: 'Yo'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
