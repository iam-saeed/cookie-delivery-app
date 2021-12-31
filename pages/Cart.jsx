import React from 'react';
import Image from 'next/image';
import styles from '../styles/Cart.module.css';

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th></th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                            <Image src="/assets/cookie.png" alt="" layout="fill" objectFit="cover" className={styles.img} />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Peanut Butter Cookie</span>
                        </td>
                        <td>
                            <span className={styles.extras}>Chocolate Milk</span>
                        </td>
                        <td>
                            <span className={styles.price}>4.99</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>9.98</span>
                        </td>
                        <td>
                            <button className={styles.remove}>Remove</button>
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                            <Image src="/assets/cookie.png" alt="" layout="fill" objectFit="cover" className={styles.img} />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Peanut Butter Cookie</span>
                        </td>
                        <td>
                            <span className={styles.extras}>Chocolate Milk</span>
                        </td>
                        <td>
                            <span className={styles.price}>4.99</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>9.98</span>
                        </td>
                        <td>
                            <button className={styles.remove}>Remove</button>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.cartTotal}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>$9.98
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>$0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Delivery Fee:</b>$8.50
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>$18.48
                    </div>
                    <button className={styles.button}>CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
