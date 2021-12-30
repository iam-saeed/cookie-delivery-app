import { useState } from 'react';
import styles from '../styles/ProductList.module.css';

import CookieCard from '../components/CookieCard.jsx';

const ProductList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>SOFT MELTING GOODNESS</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa quo commodi culpa nihil aperiam nulla, excepturi molestiae voluptate nam magni ad adipisci. Ullam, hic. Placeat omnis ducimus culpa nesciunt!
            </p>
            <div className={styles.wrapper}>
                <CookieCard />
                <CookieCard />
                <CookieCard />
                <CookieCard />
                <CookieCard />
                <CookieCard />
                <CookieCard />
                <CookieCard />
                <CookieCard />
                <CookieCard />
            </div>
        </div>
    )
}

export default ProductList
