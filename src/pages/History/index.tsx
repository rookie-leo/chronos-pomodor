import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { DefaultButton } from '../../components/DefaultButton';
import { TrashIcon } from 'lucide-react';

import styles from './styles.module.css'

export function History() {
    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>History</span>
                    <span className={styles.buttonContainer}>
                        <DefaultButton
                            icon={<TrashIcon />}
                            color='red'
                            aria-label='Apagar todo o histórico'
                            title='Apagar histórico'
                        />
                    </span>
                </Heading>
            </Container>

            <Container>
                <div className={styles.responsiveTable}>
                    <table>
                        <thead>
                            <tr>
                                <th>Tarefa</th>
                                <th>Duração</th>
                                <th>Data</th>
                                <th>Status</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 10 }).map((_, index) => {
                                return (
                                    <tr key={index}>
                                        <td>Estudar</td>
                                        <td>25min</td>
                                        <td>14/01/2026 06:29</td>
                                        <td>Completa</td>
                                        <td>Foco</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </Container>
        </MainTemplate>
    );
}
