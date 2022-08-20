import Menu from '../components/Menu'
import Image from 'next/future/image'
import styles from '../styles/Cardapio.module.css'
import barrinha from '../public/barrinhacorte.png'

export default function Cardapio() {
  return (
    <div>
     <Menu/>
        <div className={styles.cardapio}>
            <div className={styles.divbarrinha}>
                <Image src={barrinha} className={styles.barrinha}/>
                <h1>Barrinha de Morango</h1>
                <span>EU QUERO</span>   
            </div>
            <div className={styles.divbarrinha}>
                <Image src={barrinha} className={styles.barrinha}/>
                <h1>Barrinha de Chocolate</h1>
                <span>EU QUERO</span>
            </div>
            <div className={styles.divbarrinha}>
                <Image src={barrinha} className={styles.barrinha}/>
                <h1>Barrinha de Maracuja</h1>
                <span>EU QUERO</span>
            </div>
        </div>
    </div>
  )
}
