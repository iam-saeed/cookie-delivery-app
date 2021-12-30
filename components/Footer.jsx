import React from 'react';
import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.container}>
          <div className={styles.item}>
          <Image src="/assets/cookiePoster.png"  alt="" layout="fill" />
          </div>
          <div className={styles.item}>
            <div className={styles.card}>
              <h2 className={styles.motto}>
                WANT DOUGH? GET DOUGHED.
              </h2>
            </div>
            <div className={styles.card}>
              <h1 className={styles.title}>LOCATIONS</h1>
              <p className={styles.text}>
                621 Cookie Ln
                <br /> Broomfield, CO 80020
                <br /> (307) 751 - 8352
              </p>
            </div>
            <div className={styles.card}>
            <h1 className={styles.title}>HOURS</h1>
            <p className={styles.text}>
              MONDAY - FRIDAY
              <br /> 10:00 AM - 8:00 PM
            </p>
            <p className={styles.text}>
              SATURDAY
              <br /> 10:00 AM - 10:00 PM
            </p>
            <p className={styles.text}>
              SUNDAY
              <br /> 10:00 AM - 6:00 PM
            </p>
            </div>
          </div>
        </div>
    )
}

export default Footer
