import React from 'react'
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
const Navbar = () => {
    return (
        <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.callButton}>
                <Image src='/assets/phone.png' alt="phone" width={64} height={64} />
            </div>
            <div className={styles.texts}>
            <div className={styles.text}>ORDER NOW!</div>
            <div className={styles.text}>307 751 8352</div>
            </div>
        </div>
        <div className={styles.item}>
            <ul className={styles.list}>
                <li className={styles.listItem}>Home</li>
                <li className={styles.listItem}>Products</li>
                <li className={styles.listItem}>Menu</li>
                <Image src="/assets/DoughMe.png" alt='logo' height="69px" width="160px" />
                <li className={styles.listItem}>Events</li>
    
                <li className={styles.listItem}>Catering</li>
                <li className={styles.listItem}>Contact</li>

            </ul>
        </div>
                <div className={styles.item}>
                    <div className={styles.cart}>
                    <Image src="/assets/cart.png" alt='logo' height="30px" width="30px" />
                 <div className={styles.counter}>2</div>
        </div>  
        </div>
        </div>
    )
}

export default Navbar
