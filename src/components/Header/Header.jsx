import React from 'react';
import s from './Header.module.css';

class Header extends React.Component {
    render() {
        return (
            <header className={s.header}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/VK_Logo.png' alt=''/>
            </header>
        )
    }
}

export default Header;