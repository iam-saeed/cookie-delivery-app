import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/CookieCard.module.css';

const CookieCard = ({cookie}) => {
    return (
        <div className={styles.container}>
            <Link href={`/product/${cookie._id}`} passHref>
            <Image src={cookie.img} alt="" width="500" height="500" />
            </Link>
            <h1 className={styles.title}>{cookie.title}</h1>
            <span className={styles.price}>${cookie.prices[0]}</span>
            <p className={styles.desc}>{cookie.desc} </p>
        </div>
    )
}

export default CookieCard
