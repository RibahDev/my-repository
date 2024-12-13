import styles from './section.module.css'

import Image from 'next/image'

import html from '../../../public/images/html.svg'
import css from '../../../public/images/css.svg'
import javascript from '../../../public/images/javascript.svg'
import angular from '../../../public/images/angular.svg'
import react from '../../../public/images/react.svg'
import csharp from '../../../public/images/csharp.svg'
import sql from '../../../public/images/sql.svg'
import nextjs from '../../../public/images/next-js.svg'
import { useState } from 'react'
import List from '../List'


export default function Section() {
    // Estado para armazenar a linguagem selecionada
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    // Função para selecionar a linguagem
    function handleLanguageSelection(language) {
        setSelectedLanguage(language === selectedLanguage ? null : language); // Alterna a seleção
    }

    return (
        <div className={styles.container}>
            <h2>Principais tecnologias</h2>
            <div className={styles.linguageContainer}>
                {/* HTML */}
                <div>
                    <Image
                        onClick={() => handleLanguageSelection('html')}
                        src={html}
                        alt='html'
                        className={styles.linguage}
                    />
                    {selectedLanguage === 'html' && <List language="html" />}
                </div>
                
                {/* CSS */}
                <div>
                    <Image
                        onClick={() => handleLanguageSelection('css')}
                        src={css}
                        alt='css'
                        className={styles.linguage}
                    />
                    {selectedLanguage === 'css' && <List language="css" />}
                </div>
                
                {/* JavaScript */}
                <div>
                    <Image
                        onClick={() => handleLanguageSelection('js')}
                        src={javascript}
                        alt='javascript'
                        className={styles.linguage}
                    />
                    {selectedLanguage === 'js' && <List language="js" />}
                </div>

                {/* C# */}
                <div>
                    <Image
                        onClick={() => handleLanguageSelection('csharp')}
                        src={csharp}
                        alt='csharp'
                        className={styles.linguage}
                    />
                    {selectedLanguage === 'csharp' && <List language="csharp" />}
                </div>

                {/* Angular */}
                <div>
                    <Image
                        onClick={() => handleLanguageSelection('angular')}
                        src={angular}
                        alt='Angular'
                        className={styles.linguage}
                    />
                    {selectedLanguage === 'angular' && <List language="angular" />}
                </div>

                {/* React */}
                <div>
                    <Image
                        onClick={() => handleLanguageSelection('react')}
                        src={react}
                        alt='react'
                        className={styles.linguage}
                    />
                    {selectedLanguage === 'react' && <List language="react" />}
                </div>

                {/* Next.js */}
                <div>
                    <Image
                        onClick={() => handleLanguageSelection('nextjs')}
                        src={nextjs}
                        alt='nextjs'
                        className={styles.linguage}
                    />
                    {selectedLanguage === 'nextjs' && <List language="nextjs" />}
                </div>

                {/* SQL */}
                <div>
                    <Image
                        onClick={() => handleLanguageSelection('sql')}
                        src={sql}
                        alt='sql'
                        className={styles.linguage}
                    />
                    {selectedLanguage === 'sql' && <List language="sql" />}
                </div>
            </div>

            <h2>Formações</h2>
            <div className={styles.formacaoContainer}>
                <div className={styles.formacao}>
                    <h3>Ensino médio</h3>
                    <h3>Ensino Técnico</h3>
                    <h3>Ensino Superior</h3>
                    <h3>Ensino Complementar</h3>
                </div>
            </div>
        </div>
    )
}
