import styles from './section.module.css'
import Image from 'next/image'
import Link from 'next/link'

import html from '../../../public/images/html.svg'
import css from '../../../public/images/css.svg'
import javascript from '../../../public/images/javascript.svg'
import angular from '../../../public/images/angular.svg'
import react from '../../../public/images/react.svg'
import csharp from '../../../public/images/csharp.svg'
import sql from '../../../public/images/sql.svg'
import nextjs from '../../../public/images/next-js.svg'



export default function Section() {
    return (
        <div className={styles.container}>
            <h2>Principais tecnologias</h2>
            <div className={styles.linguageContainer}>
                <Image src={html} alt='html' className={styles.linguage} ></Image>
                <Image src={nextjs} alt='nextjs' className={styles.linguage} ></Image>
                <Image src={css} alt='css' className={styles.linguage} ></Image>
                <Image src={javascript} alt='javascript' className={styles.linguage} ></Image>
                <Image src={csharp} alt='csharp' className={styles.linguage} ></Image>
                <Image src={angular} alt='Angular' className={styles.linguage} ></Image>
                <Image src={react} alt='react' className={styles.linguage} ></Image>
                <Image src={sql} alt='sql' className={styles.linguage} ></Image>
            </div>
                <h2>Formações</h2>
                <div className={styles.formacaoContainer} >
                    <div className={styles.formacao} >
                        <h3>Ensino médio</h3>
                        <h3>Ensino Técnico</h3>
                        <h3>Ensino Superior</h3>
                        <h3>Ensino Complementar</h3>
                    </div>
                </div>
        </div>
    )
}