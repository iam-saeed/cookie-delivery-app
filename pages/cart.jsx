import React from 'react';
import Image from 'next/image';
import axios from 'axios'
import styles from '../styles/Cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [open, setOpen] = useState(false)
    const [cash, setCash] = useState(false)
    const amount = cart.total + 2.50;
    const currency = "USD";
    const style = {"layout":"vertical"};
    const dispatch = useDispatch();
    const router = useRouter();
    
    const createOrder = async (data) => {
        try {
          const res = await axios.post("http://localhost:3000/api/orders", data);
          if(res.status === 201){
            dispatch(reset());
            router.push(`/orders/${data._id}`);

          }
          
        } catch (err) {
          console.log(err)
        }
      };

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
                        return actions.order.capture().then(function (details) {
                            const shipping = details.purchase_units[0].shipping;
                            createOrder({
                              customer: shipping.name.full_name,
                              address: shipping.address.address_line_1,
                              total: cart.total,
                              method: 1,
                            });
                        });
                    }}
                />
            </>
        );
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tbody>

                    <tr className={styles.trTitle}>
                        <th></th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                    </tbody>
                    {/*  */}
                    <tbody>
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
                    </tbody>
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
                    {open ? (
                    <div className={styles.paymentMethods}>
                        <button className={styles.payButton}>CASH ON DELIVERY</button>
                    <PayPalScriptProvider options={{ "client-id": "AWg-usoBlWPQ1HhW6jRDKlFd2pAZGxAGKf02hFp6CzL4fTSnU97FtU5v2fjscQovfHqfNUeM7BOMH6DG", components: "buttons", currency: "USD", "disable-funding": "paylater", }} >
				        <ButtonWrapper currency={currency} showSpinner={false} />
			        </PayPalScriptProvider>
                    </div>
                    ) : (
                        <button onClick={() => setOpen(true)} className={styles.button}>CHECKOUT</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart
