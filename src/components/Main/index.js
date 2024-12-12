import styles from './main.module.css'

import Image from 'next/image'
import Link from 'next/link'

import squirtle from '../../../public/images/squirtle.jpg'
import git from '../../../public/images/git.png'
import linkd from '../../../public/images/linkd.png'

export default function Main() {
    return (
        <div className={styles.container} >
            <div className={styles.card}>
                <h2>Olá, me chamo <span>João Ribeiro!</span></h2>
                <p>Teste teste teste teste teste teste teste teste teste teste teste</p>
            </div>

            <div className={styles.imagens}>
                <Image className={styles.squirt} src={squirtle} alt='Imagem de perfil' ></Image>

                <div className={styles.social}>
                    <Link href='#' ><Image className={styles.git} src={git} alt='github' ></Image></Link>
                    <Link href='#'><Image className={styles.linkd} src={linkd} alt='linkedin'></Image></Link>
                </div>
            </div>
        </div>
    )
}