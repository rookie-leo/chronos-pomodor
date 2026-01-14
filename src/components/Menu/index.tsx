import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'
import { RouterLink } from '../RouterLink';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark'
        return storageTheme
    })

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    }

    function toggleTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault() //Não muda de pagina ao clicar no link

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <div className={styles.menu}>
            <RouterLink 
                className={styles.menuLink} 
                href='/'
                aria-label='Home'
                title='Ir para home'
            >
                <HouseIcon />
            </RouterLink>

            <RouterLink 
                className={styles.menuLink} 
                href='/history/'
                aria-label='Histórico'
                title='Ver historico'
            >
                <HistoryIcon />
            </RouterLink>

            <RouterLink 
                className={styles.menuLink} 
                href='/settings/'
                aria-label='Configurações'
                title='Ir para configurações'
            >
                <SettingsIcon />
            </RouterLink>

            <a 
                className={styles.menuLink} 
                href='#'
                aria-label='Tema'
                title='Mudar tema claro/escuro'
                onClick={toggleTheme}
            >
                {nextThemeIcon[theme]}
            </a>
        </div>
    )
}