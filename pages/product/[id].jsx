import { useState } from 'react';
import { addProduct } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import styles from '../../styles/Product.module.css';
import axios from 'axios';

const Product = ({ cookie }) => {
    const [size, setSize] = useState(0)
    const [price, setPrice] = useState(cookie.prices[0])
    const [milks, setMilks] = useState([])
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();

    const changePrice = (num) => {
        setPrice(price + num)
    }
    const handleClick = () => {
        dispatch(addProduct({...cookie, milks, price, quantity}))
    }

    const handleSize = (sizeIndex) => {
        const difference = cookie.prices[sizeIndex] - cookie.prices[size];
        setSize(sizeIndex)
        changePrice(difference)
    }

    const handleChange = (e, option) => {
        const checked = e.target.checked;
        if(checked){
            changePrice(option.price)
            setMilks(prev => [...prev, option])
        } else {
            changePrice(-option.price)
            setMilks(milks.filter(milk => milk._id !== option._id))
        }
    } 
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image alt="" src={cookie.img} layout="fill" objectFit="contain"/>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{cookie.title}</h1>
                <span className={styles.price}>${price}</span>
                <p className={styles.desc}>{cookie.desc}</p>
                <h3>Choose the size</h3>
                <div className={styles.sizes}>
                <div className={styles.size} onClick={() => handleSize(0)} >
                    <Image alt='' src='/assets/size.png' layout="fill" />
                    <span className={styles.number}>Single</span>
                </div>
                <div className={styles.size} onClick={() => handleSize(1)} >
                    <Image alt='' src='/assets/size.png' layout="fill" />
                    <span className={styles.number}>6 Pack</span>
                </div>
                <div className={styles.size} onClick={() => handleSize(2)} >
                    <Image alt='' src='/assets/size.png' layout="fill" />
                    <span className={styles.number}>Dozen</span>
                </div>
                </div>
                <h3 className={styles.choose}>Choose a milk (optional)</h3>
                <div className={styles.milk}>
                    {cookie.milkOptions.map(option => (
                    <div className={styles.option} key={option._id}>
                        <input onChange={(e) => handleChange(e, option)} type="checkbox" id={option.text} name={option.text} className={styles.checkbox} />
                        <label htmlFor={option.text}>{option.text}</label>
                    </div>
                    ))}
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity} onChange={(e) => setQuantity(e.target.value)} />
                    <button className={styles.button} onClick={handleClick}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/product/${params.id}`);
    return {
      props: {
        cookie: res.data
      }
    }
  }

export default Product
