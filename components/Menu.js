import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/future/image'
import styles from '../styles/Home.module.css'
import logo from '../public/melevefit.png'
import cart from '../public/cart.png'
import bcg from '../public/bcg.jpg'

const Menu = () => {return(
    <div className={styles.container}>
      <Head>
        <title>MeLeve Fit</title>
        <meta name="MeLeve Fit" content="MeLeve Fit" />
        <link rel="icon" href="/leve.ico" />
      </Head>
      <header className={styles.header}>
        <Image src={logo} className={styles.logo}/>
        <Link  href='/'>
        <a className={styles.letters}>Home</a>
        </Link>
        <Link href='/'>
        <a className={styles.letters}>Cárdapio</a>
        </Link>
        <Link href='/'>
        <a className={styles.letters}>Sobre Nós</a>
        </Link>
        <Link href='/'>
        <a className={styles.letters}>Contato</a>
        </Link>
        <Link href='/'>
        <a><Image src={cart} className={styles.cart}/></a>
        </Link>
      </header>

      <Image src={bcg} className={styles.bcg}/>

    </div>
  )
}

export default Menu;