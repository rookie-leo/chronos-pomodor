import styles from './styles.module.css'
import { RouterLink } from '../RouterLink';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <RouterLink href='/about-pomodoro/'>Como funciona o Pomodoro?</RouterLink>
            <RouterLink href='https://rookie-leo.github.io/' target='_blank'>Chronos Pomodoro by Leonardo &copy; {new Date().getFullYear()}</RouterLink>
        </footer>
    );
}