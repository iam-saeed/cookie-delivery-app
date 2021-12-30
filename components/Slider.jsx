import { useState } from 'react';
import styles from '../styles/Slider.module.css';
import Image from 'next/image';

const Slider = () => {
    const [index, setIndex] = useState(0);
    const images = [
        '/assets/featured.png',
        '/assets/featured2.png',
        '/assets/featured3.png',
    ]

    const handleClick = (direction) => {
        if(direction === 'l'){
            setIndex(index !== 0 ? index - 1 : 2)
        }
        if(direction === 'r'){
            setIndex(index !== 2 ? index + 1 : 0)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleClick('l')} >
            <Image src="/assets/arrowl.png" alt="" layout="fill" objectFit='contain' />
            </div>
            <div className={styles.wrapper} style={{ transform: `translateX(${-100*index}vw)` }} >
                    {images.map((img, i )=> (
                <div className={styles.imgContainer} key={i}>
                        <Image src={img} alt="" layout="fill" objectFit='contain' />
                </div>
                    ))}
            </div>
            <div className={styles.arrowContainer} style={{ right: 0}}>
            <Image src="/assets/arrowr.png" alt="" layout="fill" onClick={() => handleClick('r')} objectFit='contain' />
            </div>
        </div>
    )
}

export default Slider
