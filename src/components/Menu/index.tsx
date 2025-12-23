import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>('dark')

    function toggleTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault() //Não muda de pagina ao clicar no link

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme
        })
    }

    // useEffect(() => {
    //     console.log('Executa todas as vezes que o componente renderiza na tela')
    // })

    // useEffect(() => {
    //     console.log('Executa apenas quando o react monta o componente na tela pela 1ª vez')
    // }, [])

    useEffect(() => {
        console.log('Executa apenas quando o valor de theme muda', theme)
        document.documentElement.setAttribute('data-theme', theme)

        return () => {
            console.log('Este componente será atualizado')
        }
    }, [theme])

    return (
        <div className={styles.menu}>
            <a 
                className={styles.menuLink} 
                href='#'
                aria-label='Home'
                title='Ir para home'
            >
                <HouseIcon />
            </a>

            <a 
                className={styles.menuLink} 
                href='#'
                aria-label='Histórico'
                title='Ver historico'
            >
                <HistoryIcon />
            </a>

            <a 
                className={styles.menuLink} 
                href='#'
                aria-label='Configurações'
                title='Ir para configurações'
            >
                <SettingsIcon />
            </a>

            <a 
                className={styles.menuLink} 
                href='#'
                aria-label='Tema'
                title='Mudar tema claro/escuro'
                onClick={toggleTheme}
            >
                <SunIcon />
            </a>
        </div>
    )
}