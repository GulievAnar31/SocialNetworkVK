import React from 'react';
import styles from './style.module.scss';

export const Navigation = () => {
    const [activeMiniMenu, setActiveMiniMenu] = React.useState(false);

    const MiniMenu = () => {
        return <div>
            <button onClick={() => setActiveMiniMenu(!activeMiniMenu)} className={styles.navigationMiniActive}>{'>'}</button>
            {activeMiniMenu && <nav className={styles.navigationMini}>
                <a href="#">Моя страница</a>
                <a href="#">Новости</a>
                <a href="#">Друзья</a>
                <a href="#">Настройки</a>
            </nav>}
        </div>
    }

    return<>
    <MiniMenu />
    <nav className={styles.navigation}>
        <a href="#">Моя страница</a>
        <a href="#">Новости</a>
        <a href="#">Друзья</a>
        <a href="#">Настройки</a>
    </nav>
    </>
};