import React from 'react';
import styles from './style.module.css';

export const Navigation = () => {
    return <nav className={styles.navigation}>
        <a href="#">Моя страница</a>
        <a href="#">Новости</a>
        <a href="#">Друзья</a>
        <a href="#">Настройки</a>
    </nav>
};