import React from 'react';
import styles from './style.module.scss';

export const UserInfo = () => {
    return <div className={styles.userInfo}>
        <div>
        <img src="https://sun9-26.userapi.com/impg/x5NfpyqCwc0klKjLLGCYcPM96hQnj09zzi0rng/lZ92WITuEvg.jpg?size=200x267&quality=96&sign=1a7d7f36e4be0622551f5ce269c5237c&c_uniq_tag=FRDzsVoSi-2PU34itAzooaT4-1kBe2lrQZn-L_N5ll0&type=album" alt="me" />    
        </div>

        <div className={styles.info}>
            <span>Anar Guliev</span>
            <span>Санкт-Петербург</span>
            <span>31.01.1998</span>
        </div>
    </div>
};