import styles from './main.module.css'

import Image from 'next/image'
import Link from 'next/link'

import squirtle from '../../../public/images/squirtle.jpg'
import github from '../../../public/images/github.svg'
import linkedin from '../../../public/images/linkedin.svg'

export default function Main() {
    return (
        <div className={styles.container} >
            <div className={styles.blocoTexto}>
                <h2>Olá, me chamo <span>João Ribeiro!</span></h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <div className={styles.card}>
                <Image className={styles.squirt} src={squirtle} alt='Imagem de perfil' ></Image>

                <div className={styles.social}>
                    <Link href='https://github.com/RibahDev'  target='_blank'><Image className={styles.git} src={github} alt='github'></Image></Link>
                    <Link href='https://www.linkedin.com/feed/update/urn:li:activity:7270094151617052672/?commentUrn=urn%3Ali%3Acomment%3A(ugcPost%3A7270094150908194817%2C7274358015581974528)&dashCommentUrn=urn%3Ali%3Afsd_comment%3A(7274358015581974528%2Curn%3Ali%3AugcPost%3A7270094150908194817)' target='_blank'><Image className={styles.linkd} src={linkedin} alt='linkedin'></Image></Link>
                </div>
            </div>
        </div>
    )
}