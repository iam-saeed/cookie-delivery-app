import React from 'react'
import Image from 'next/image';
import styles from '../../styles/Order.module.css';

const Order = () => {

    const status = 0;

    const statusClass = (index) => {
        if(index-status < 1) return styles.done
        if(index-status === 1) return styles.inProgress
        if(index-status > 1) return styles.undone
    }

    return (
        <div className={styles.container}>
           <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>129837819237</span>
              </td>
              <td>
                <span className={styles.name}>Saeed Khan</span>
              </td>
              <td>
                <span className={styles.address}>124 Conch Street, Bikini Bottom, Marshall Islands 96970</span>
              </td>
              <td>
                <span className={styles.total}>$18.48</span>
              </td>
            </tr>
          </table>
        </div>
        <br />
        <div className={styles.row}>
          <div className={statusClass(1)}>
            <Image src="/assets/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div >
              <Image
                // className={styles.checkedIcon}
                src="/assets/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/assets/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/assets/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/assets/bike.png" width={30} height={30} alt="" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/assets/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/assets/delivered.png" width={30} height={30} alt="" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/assets/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
            
          </div>
        </div>
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
                    <button disabled className={styles.button}>PAID</button>
                    <div className={styles.thankYou}>
        <h4>Thank you for ordering! We value your business, and will continue to provide you with exceptional service. Enjoy the mouth watering cookies! </h4>
        </div>
                </div>
            </div>
        </div>
        
    )
}

export default Order
