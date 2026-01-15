import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { DefaultButton } from '../../components/DefaultButton';
import { TrashIcon } from 'lucide-react';

import styles from './styles.module.css'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks, type SortTaskOptions } from '../../utils/sortTasks';
import { useMemo, useState } from 'react';
import { TaskActionsTypes } from '../../contexts/TaskContext/taskActions';

export function History() {
    const { state, dispatch } = useTaskContext()
    const hasTasks = state.tasks.length > 0

    const [sortConfig, setSortConfig] = useState<{
        field: SortTaskOptions['field']
        direction: SortTaskOptions['direction']
    }>({
        field: 'startDate',
        direction: 'desc'
    })

    const sortedTasks = useMemo(() => {
        return sortTasks({
            tasks: state.tasks,
            field: sortConfig.field,
            direction: sortConfig.direction
        })
    }, [state.tasks, sortConfig])

    function handleSortTasks({ field }: Pick<SortTaskOptions, 'field'>) {
        setSortConfig(prev => ({
            field,
            direction: prev.direction === 'desc' ? 'asc' : 'desc'
        }))
    }

    function handleResetHistory() {
        if (!confirm('Tem certeza que deseja limpar o histórico?')) return

        dispatch({ type: TaskActionsTypes.RESET_STATE })
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>History</span>
                    {hasTasks && (
                        <span className={styles.buttonContainer}>
                            <DefaultButton
                                icon={<TrashIcon />}
                                color='red'
                                aria-label='Apagar todo o histórico'
                                title='Apagar histórico'
                                onClick={handleResetHistory}
                            />
                        </span>
                    )}
                </Heading>
            </Container>

            <Container>
                {hasTasks && (
                    <div className={styles.responsiveTable}>
                        <table>
                            <thead>
                                <tr>
                                    <th
                                        onClick={() => handleSortTasks({ field: 'name' })}
                                        className={styles.thSort}
                                    >
                                        Tarefa ↕
                                    </th>
                                    <th
                                        onClick={() => handleSortTasks({ field: 'duration' })}
                                        className={styles.thSort}
                                    >
                                        Duração ↕
                                    </th>
                                    <th
                                        onClick={() => handleSortTasks({ field: 'startDate' })}
                                        className={styles.thSort}
                                    >
                                        Data ↕
                                    </th>
                                    <th>Status</th>
                                    <th>Tipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedTasks.map(task => {
                                    const taskTypes = {
                                        workTime: 'Foco',
                                        shortBreakTime: 'Descanso curto',
                                        longBreakTime: 'Descanso longo'
                                    }

                                    return (
                                        <tr key={task.id}>
                                            <td>{task.name}</td>
                                            <td>{task.duration}min</td>
                                            <td>{formatDate(task.startDate)}</td>
                                            <td>{getTaskStatus(task, state.activeTask)}</td>
                                            <td>{taskTypes[task.type]}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                )}

                {!hasTasks &&
                    <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                        Ainda não existem tarefas criadas
                    </p>}
            </Container>
        </MainTemplate>
    );
}
