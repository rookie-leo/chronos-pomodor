import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { DefaultInput } from '../../components/DefaultInput';
import { DefaultButton } from '../../components/DefaultButton';
import { SaveIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionsTypes } from '../../contexts/TaskContext/taskActions';

export function Settings() {
    const { state, dispatch } = useTaskContext()
    const workTimeInputRef = useRef<HTMLFormElement>(null)
    const shortBreakTimeInputRef = useRef<HTMLFormElement>(null)
    const longBreakTimeInputRef = useRef<HTMLFormElement>(null)

        useEffect(() => {
            document.title = 'Configurações - Chronos Pomodoro'
        }, [])

    function handleSaveSettings(element: React.FormEvent<HTMLFormElement>) {
        element.preventDefault()
        showMessage.dismiss()

        const formErrors = []
        const workTime = Number(workTimeInputRef.current?.value)
        const shortBreakTime = Number(shortBreakTimeInputRef.current?.value)
        const longBreakTime = Number(longBreakTimeInputRef.current?.value)

        if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
            formErrors.push('Os campos aceitam apenas números')
        }

        if (workTime < 1 || workTime > 99) {
            formErrors.push("Digite valores entre 1 e 99 para foco")
        }

        if (shortBreakTime < 1 || shortBreakTime > 30) {
            formErrors.push("Digite valores entre 1 e 30 para descanso curto")
        }

        if (longBreakTime < 1 || longBreakTime > 60) {
            formErrors.push("Digite valores entre 1 e 60 para descanso longo")
        }

        if (formErrors.length > 0) {
            formErrors.forEach(error => {
                showMessage.error(error)
            })
            return
        }

        dispatch({
            type: TaskActionsTypes.CHANGE_SETTINGS,
            payload: {
                workTime,
                shortBreakTime,
                longBreakTime
            }
        })

        showMessage.success('Configurações Salvas!')
    }


    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>

            <Container>
                <p style={{ textAlign: 'center' }}>
                    Modifique as configurações para o tempo de foco, descanso curto
                    e descanso longo.
                </p>
            </Container>

            <Container>
                <form onSubmit={handleSaveSettings} action="" className='form'>
                    <div className='formRow'>
                        <DefaultInput
                            id='workTime'
                            labelText='Foco'
                            ref={workTimeInputRef}
                            defaultValue={state.config.workTime}
                            type='number'
                        />
                    </div>

                    <div className='formRow'>
                        <DefaultInput
                            id='shortBreakTime'
                            labelText='Descanso Curto'
                            ref={shortBreakTimeInputRef}
                            defaultValue={state.config.shortBreakTime}
                            type='number'
                        />
                    </div>

                    <div className='formRow'>
                        <DefaultInput
                            id='longBreakTime'
                            labelText='Descanso Longo'
                            ref={longBreakTimeInputRef}
                            defaultValue={state.config.longBreakTime}
                            type='number'
                        />
                    </div>

                    <div className='formRow'>
                        <DefaultButton
                            icon={<SaveIcon />}
                            aria-label='Salvar configurações'
                            title='Salvar configurações'
                        />
                    </div>
                </form>
            </Container>
        </MainTemplate>
    );
}
