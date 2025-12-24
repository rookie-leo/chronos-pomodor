import { useContext } from 'react';
import styles from './styles.module.css'
import { TaskContext, useTaskContext } from '../../contexts/TaskContext';

export function CountDown() {
    const taskContext = useTaskContext()
    console.log(taskContext);

    return (
        <div className={styles.container}>00:00</div>
    );
};