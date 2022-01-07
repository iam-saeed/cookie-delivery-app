import React from 'react';
import Image from 'next/image';
import styles from '../styles/CookieCard.module.css';

const CookieCard = ({cookie}) => {
    return (
        <div className={styles.container}>
            <Image src={cookie.img} alt="" width="500" height="500" />
            <h1 className={styles.title}>{cookie.title}</h1>
            <span className={styles.price}>${cookie.prices[0]}</span>
            <p className={styles.desc}>{cookie.desc} </p>
        </div>
    )
}

export default CookieCard
