import styles from './section.module.css';
import Image from 'next/image';

import html from '../../../public/images/html.svg';
import css from '../../../public/images/css.svg';
import javascript from '../../../public/images/javascript.svg';
import angular from '../../../public/images/angular.svg';
import react from '../../../public/images/react.svg';
import csharp from '../../../public/images/csharp.svg';
import sql from '../../../public/images/sql.svg';
import nextjs from '../../../public/images/next-js.svg';
import formacao from '../../../public/images/formacao.svg'
import loading from '../../../public/images/loading.jpg'
import { useState } from 'react';
import List from '../List';

export default function Section() {
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    function handleLanguageSelection(language) {
        setSelectedLanguage(language === selectedLanguage ? null : language);
    }

    return (
        <div className={styles.container}>
            <h2>Principais tecnologias</h2>
            <div className={`${styles.linguageContainer} ${selectedLanguage ? styles.expanded : ''}`}>
                {/* HTML */}
                <div>
                    <Image
                        onClick={() => handleLanguageSelection('html')}
                        src={html}
                        alt="html"
                        className={styles.linguage}
                    />
                    <div className={`${styles.listContainer} ${selectedLanguage === 'html' ? styles.active : ''}`}>
                        {selectedLanguage === 'html' && <List language="html" />}
                    </div>
                </div>

                {/* CSS */}
                <div>
                    <Image
                        onClick={() => handleLanguageSelection('css')}
                        src={css}
                        alt="css"
                        className={styles.linguage}
                    />
                    <div className={`${styles.listContainer} ${selectedLanguage === 'css' ? styles.active : ''}`}>
                        {selectedLanguage === 'css' && <List language="css" />}
                    </div>
                </div>

                {/* JavaScript */}
                <div>
                    <Image
                        onClick={() => handleLanguageSelection('js')}
                        src={javascript}
                        alt="javascript"
                        className={styles.linguage}
                    />
                    <div className={`${styles.listContainer} ${selectedLanguage === 'js' ? styles.active : ''}`}>
                        {selectedLanguage === 'js' && <List language="js" />}
                    </div>
                </div>

                {/* C# */}
                <div>
                    <Image
                        onClick={() => handleLanguageSelection('csharp')}
                        src={csharp}
                        alt="csharp"
                        className={styles.linguage}
                    />
                    <div className={`${styles.listContainer} ${selectedLanguage === 'csharp' ? styles.active : ''}`}>
                        {selectedLanguage === 'csharp' && <List language="csharp" />}
                    </div>
                </div>

                {/* Angular */}
                <div>
                    <Image
                        onClick={() => handleLanguageSelection('angular')}
                        src={angular}
                        alt="Angular"
                        className={styles.linguage}
                    />
                    <div className={`${styles.listContainer} ${selectedLanguage === 'angular' ? styles.active : ''}`}>
                        {selectedLanguage === 'angular' && <List language="angular" />}
                    </div>
                </div>

                {/* React */}
                <div>
                    <Image
                        onClick={() => handleLanguageSelection('react')}
                        src={react}
                        alt="react"
                        className={styles.linguage}
                    />
                    <div className={`${styles.listContainer} ${selectedLanguage === 'react' ? styles.active : ''}`}>
                        {selectedLanguage === 'react' && <List language="react" />}
                    </div>
                </div>

                {/* Next.js */}
                <div>
                    <Image
                        onClick={() => handleLanguageSelection('nextjs')}
                        src={nextjs}
                        alt="nextjs"
                        className={styles.linguage}
                    />
                    <div className={`${styles.listContainer} ${selectedLanguage === 'nextjs' ? styles.active : ''}`}>
                        {selectedLanguage === 'nextjs' && <List language="nextjs" />}
                    </div>
                </div>

                {/* SQL */}
                <div>
                    <Image
                        onClick={() => handleLanguageSelection('sql')}
                        src={sql}
                        alt="sql"
                        className={styles.linguage}
                    />
                    <div className={`${styles.listContainer} ${selectedLanguage === 'sql' ? styles.active : ''}`}>
                        {selectedLanguage === 'sql' && <List language="sql" />}
                    </div>
                </div>
            </div>

            <h2>Formações</h2>
            <div className={styles.formacaoContainer}>

                <div className={styles.formacao}>
                    <div className={styles.divisao1}>
                        <div className={styles.formacaoBloco}>
                            <h3>Ensino médio</h3>
                            <li>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            </li>
                            <li>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            </li>
                        </div>
                        <div className={styles.formacaoBloco}>
                            <h3>Ensino Técnico</h3>
                            <li>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            </li>
                            <li>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            </li>
                        </div>
                    </div>

                    <div className={styles.divisao2}>

                        <div className={styles.coluna}></div>
                        <div className={styles.learning}>
                            <Image src={formacao} className={styles.formacaoImage}></Image>
                        </div>
                        <div className={styles.coluna}></div>
                    </div>
                    <div className={styles.divisao1}>
                        <div className={styles.formacaoBloco}>
                            <h3>Ensino Superior</h3>
                            <li>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            </li>
                            <li>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            </li>
                        </div>
                        <div className={styles.formacaoBloco}>
                            <h3>Ensino Complementar</h3>
                            <li>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            </li>
                            <li>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            </li>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Projetos</h2>
            <div className={styles.projetosContainer} >
                <div className={styles.projetoBloco}>
                    <Image className={styles.projetoImagem} src={loading} ></Image>
                    <p>Nome do Pojeto</p>
                </div>
                <div className={styles.projetoBloco}>
                    <Image className={styles.projetoImagem} src={loading} ></Image>
                    <p>Nome do Pojeto</p>
                </div>
                <div className={styles.projetoBloco}>
                    <Image className={styles.projetoImagem} src={loading} ></Image>
                    <p>Nome do Pojeto</p>
                </div>
                <div className={styles.projetoBloco}>
                    <Image className={styles.projetoImagem} src={loading} ></Image>
                    <p>Nome do Pojeto</p>
                </div>
                <hr />
            </div>
        </div>
    );
}
