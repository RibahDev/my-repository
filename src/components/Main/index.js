import styles from './main.module.css'

import Image from 'next/image'
import Link from 'next/link'

import squirtle from '../../../public/images/squirtle.jpg'
import github from '../../../public/images/github.svg'
import linkedin from '../../../public/images/linkedin.svg'

export default function Main() {
    return (
        <div className={styles.container} >
            <div className={styles.card}>
                <h2>Olá, me chamo <span>João Ribeiro!</span></h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <div className={styles.imagens}>
                <Image className={styles.squirt} src={squirtle} alt='Imagem de perfil' ></Image>

                <div className={styles.social}>
                    <Link href='#' ><Image className={styles.git} src={github} alt='github' ></Image></Link>
                    <Link href='#'><Image className={styles.linkd} src={linkedin} alt='linkedin'></Image></Link>
                </div>
            </div>
        </div>
    )
}