import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import { useState } from 'react';

export function App() {
     const [numero, setNumero] = useState(0);

    function handleClick() {
        setNumero(prevState => prevState + 1)
    }

    return <>
        <Heading>
            Numero de cliques: {numero}
            <button onClick={handleClick}>Button</button>
        </Heading>

        <Container>
            <Logo />
        </Container>

        <Container>
            <Menu />
        </Container>

        <Container>
            <CountDown />
        </Container>

        <Container>
            <form className="form" action="">
                <div className='formRow'>
                    <DefaultInput
                        labelText='atividade'
                        id='input'
                        type='text'
                        placeholder='Nome da tarefa'
                    />
                </div>

                <div className='formRow'>
                    <p>{numero}</p>
                </div>

                <div className='formRow'>
                    <Cycles />
                </div>

                <div className='formRow'>
                    <DefaultButton icon={<PlayCircleIcon />} />
                    <DefaultButton icon={<StopCircleIcon />} color='red' />
                </div>
            </form>
        </Container>

        <Container>
            <Footer />
        </Container>
    </>;
}
