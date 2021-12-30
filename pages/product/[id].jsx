import { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Product.module.css';

const Product = () => {
    const [size, setSize] = useState(0)

    const cookie = {
        id: 1,
        img: '/assets/cookie.png',
        name: "Peanut Butter Cookie",
        price: [3.99, 5.99, 7.99],
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image alt="" src={cookie.img} layout="fill" objectFit="contain"/>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{cookie.name}</h1>
                <span className={styles.price}>${cookie.price[size]}</span>
                <p className={styles.desc}>{cookie.desc}</p>
                <h3>Choose the size</h3>
                <div className={styles.sizes}>
                <div className={styles.size} onClick={() => setSize(0)} >
                    <Image alt='' src='/assets/size.png' layout="fill" />
                    <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size} onClick={() => setSize(1)} >
                    <Image alt='' src='/assets/size.png' layout="fill" />
                    <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size} onClick={() => setSize(2)} >
                    <Image alt='' src='/assets/size.png' layout="fill" />
                    <span className={styles.number}>Large</span>
                </div>
                </div>
                <h3 className={styles.choose}>Choose a milk (optional)</h3>
                <div className={styles.milk}>
                    <div className={styles.option}>
                        <input type="checkbox" id="w2" name="w2" className={styles.checkbox} />
                        <label htmlFor="w2">Reduced Fat</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id="w" name="w" className={styles.checkbox} />
                        <label htmlFor="w">Whole</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id="c" name="c" className={styles.checkbox} />
                        <label htmlFor="c">Chocolate</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity} />
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product
