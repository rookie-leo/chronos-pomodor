import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useState } from 'react'

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>('dark')

    function toggleTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault() //Não muda de pagina ao clicar no link
        console.log("Troca trocando...")

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme
        })

        document.documentElement.setAttribute('data-theme', theme)
    }

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