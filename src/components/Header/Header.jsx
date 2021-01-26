import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/VK_Logo.png' alt=''/>
        </header>
    )
}

export default Header;