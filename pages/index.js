import Head from 'next/head'
import Image from 'next/future/image'
import styles from '../styles/Home.module.css'
import logo from '../public/melevefit.png'
import cart from '../public/cart.png'
import bcg from '../public/bcg.jpg'
import Menu from '../components/Menu'

export default function Home() {
  return (
    <div className={styles.container}>
     <Menu/>
    </div>
  )
}
