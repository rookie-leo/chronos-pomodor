import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { DefaultInput } from '../../components/DefaultInput';
import { DefaultButton } from '../../components/DefaultButton';
import { SaveIcon } from 'lucide-react';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function Settings() {
    const { state } = useTaskContext()
    const workTimeInputRef = useRef<HTMLFormElement>(null)
    const shortBreakTimeInputRef = useRef<HTMLFormElement>(null)
    const longBreakTimeInputRef = useRef<HTMLFormElement>(null)


    function handleSaveSettings(element: React.FormEvent<HTMLFormElement>) {
        element.preventDefault()

        const workTime = workTimeInputRef.current?.value
        const shortBreakTime = shortBreakTimeInputRef.current?.value
        const longBreakTime = longBreakTimeInputRef.current?.value

        console.log(workTime, shortBreakTime, longBreakTime)       
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
                        />
                    </div>

                    <div className='formRow'>
                        <DefaultInput
                            id='shortBreakTime'
                            labelText='Descanso Curto'
                            ref={shortBreakTimeInputRef}
                            defaultValue={state.config.shortBreakTime}
                        />
                    </div>

                    <div className='formRow'>
                        <DefaultInput
                            id='longBreakTime'
                            labelText='Descanso Longo'
                            ref={longBreakTimeInputRef}
                            defaultValue={state.config.longBreakTime}
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
