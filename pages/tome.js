import Head from 'next/head'
import Image from 'next/future/image'
import styles from '../styles/Home.module.css'
import logo from '../public/melevefit.png'
import cart from '../public/cart.png'
import bcg from '../public/bcg.jpg'

function Tome() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MeLeve Fit</title>
        <meta name="MeLeve Fit" content="MeLeve Fit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Image src={logo} className={styles.logo}/>
        <a className={styles.letters} href='/'>Home</a>
        <a className={styles.letters} href='/'>Cárdapio</a>
        <a className={styles.letters} href='/'>Sobre Nós</a>
        <a className={styles.letters} href='/'>Contato</a>
        <a href='/'><Image src={cart} className={styles.cart}/></a>
      </header>

      <Image src={bcg} className={styles.bcg}/>

    </div>
  )
}

export default Tome()