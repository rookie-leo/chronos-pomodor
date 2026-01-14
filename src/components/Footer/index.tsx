import { Link } from 'react-router';
import styles from './styles.module.css'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <Link to='/about-pomodoro/'>Como funciona o Pomodoro?</Link>
            <Link to='https://rookie-leo.github.io/' target='_blank'>Chronos Pomodoro by Leonardo &copy; {new Date().getFullYear()}</Link>
        </footer>
    );
}