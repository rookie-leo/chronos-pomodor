import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { DefaultInput } from '../../components/DefaultInput';
import { DefaultButton } from '../../components/DefaultButton';
import { SaveIcon } from 'lucide-react';

export function Settings() {
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
                <form action="" className='form'>
                    <div className='formRow'>
                        <DefaultInput id='workTime' labelText='Foco' />
                    </div> 

                    <div className='formRow'>
                        <DefaultInput id='shortBreakTime' labelText='Descanso Curto' />
                    </div>         

                    <div className='formRow'>
                        <DefaultInput id='longBreakTime' labelText='Descanso Longo' />
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
