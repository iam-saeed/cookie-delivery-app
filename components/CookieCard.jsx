import React from 'react';
import Image from 'next/image';
import styles from '../styles/CookieCard.module.css';

const CookieCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/assets/cookie.png" alt="" width="500" height="500" />
            <h1 className={styles.title}>Peanut Butter Cookie</h1>
            <span className={styles.price}>$4.00</span>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
    )
}

export default CookieCard
