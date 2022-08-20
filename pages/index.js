import Image from 'next/future/image'
import styles from '../styles/Home.module.css'
import bcg from '../public/bcg.jpg'
import Menu from '../components/Menu'

export default function Home() {
  return (
    <div className={styles.container}>
     <Menu/>
     <Image src={bcg} className={styles.bcg}/>
    </div>
  )
}
