import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css'


export function Cycles() {
    const { state } = useTaskContext()
    const cycleSteps = Array.from({ length: state.currentCycle })
    const cycleDescription = {
        workTime: 'foco',
        shortBreakTime: 'descanso curto',
        longBreakTime: 'descanso longo'
    }


    return (
        <div className={styles.cycle}>
            <span className={styles.cycleLabel}>Ciclos:</span>

            <div className={styles.cycleDots}>
                {cycleSteps.map((_, index) => {
                    const nextCycle = getNextCycle(index)
                    const nextCycleType = getNextCycleType(nextCycle)
                    return (
                        <span
                            key={nextCycle}
                            className={`${styles.cycleDot} ${styles[nextCycleType]}`}
                            aria-label={`Indicador do ciclo de ${cycleDescription[nextCycleType]}`}
                            title={`Indicador do ciclo de ${cycleDescription[nextCycleType]}`}>

                        </span>
                    )
                })}
            </div>
        </div>
    );
}