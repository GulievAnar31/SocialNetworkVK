import React from 'react';
import styles from './style.module.css';

export const Header: React.FC = (): JSX.Element => {
    return <header className={styles.header}>
        <h1><a href='/'>Вконтакте</a></h1>
        <input type="text" className={styles.search} placeholder='Поиск' />
        <input type="submit" className={styles.logout} value='Выйти' />
    </header>
};