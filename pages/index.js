import Head from 'next/head'
import axios from 'axios';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Slider from '../components/Slider.jsx';
import ProductList from '../components/ProductList';

export default function Home({ productList }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>DoughMe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <ProductList productList={productList} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/product");
  return {
    props: {
      productList: res.data
    }
  }
}