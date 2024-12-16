import styles from './List.module.css'
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks'
import codeSnippets from './codeSnippets.json' 

export default function List({ language }) {
    // Pega o código para a linguagem selecionada
    const code = codeSnippets[language]?.code || ''; 

    return (
        <div className={styles.clickList}>
            <CodeBlock 
                text={code}
                language={language}
                showLineNumbers={true}
                wrapLongLines={true}
                highlight="1,2,3,4,5,6,7,8,9,10"
                theme={dracula}
            />
        </div>
    )
}
