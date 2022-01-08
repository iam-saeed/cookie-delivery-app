import React from 'react';
import Image from 'next/image';
import styles from '../styles/Cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

const Cart = () => {
    const amount = "2";
    const currency = "USD";
    const style = {"layout":"vertical"};

    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    
        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);
    
    
        return (<>
                { (showSpinner && isPending) && <div className="spinner" /> }
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
                    onApprove={function (data, actions) {
                        return actions.order.capture().then(function () {
                            // Your code here after capture the order
                        });
                    }}
                />
            </>
        );
    }
    
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.trTitle}>
                        <th></th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                    {/*  */}
                    {cart.products.map((product) => (
                    <tr  className={styles.tr} key={product._id}>
                        <td>
                            <div className={styles.imgContainer}>
                            <Image src={product.img} alt="" layout="fill" objectFit="cover" className={styles.img} />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>{product.title}</span>
                        </td>
                        <td> 
                            <span className={styles.extras}>
                                {/* {product.milkOptions.map((xtra) => (
                                    <span key={xtra._id}>{xtra.text}</span>
                                ))} */}
                                {product.milkOptions.text}
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>{product.price}</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>{product.quantity}</span>
                        </td>
                        <td>
                            <span className={styles.total}>${product.price * product.quantity}</span>
                        </td>
                        <td>
                            <button className={styles.remove}>Remove</button>
                        </td>
                        
                    </tr>
                    ))}

                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.cartTotal}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>$0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Delivery Fee:</b>$2.50
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>${cart.total + 2.50}
                    </div>
                    <button className={styles.button}>CHECKOUT</button>
                    <PayPalScriptProvider options={{ "client-id": "test", components: "buttons", currency: "USD", "disable-funding": "paylater", }} >
				        <ButtonWrapper currency={currency} showSpinner={false} />
			        </PayPalScriptProvider>
                </div>
            </div>
        </div>
    )
}

export default Cart
