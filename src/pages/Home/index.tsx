import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import type { TaskStateModel } from '../../models/TaskStateModel';

type HomeProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {
    const { state, setState } = props;

    function handleClick() {
        setState(prevState => {
            return {
                ...prevState,
                currentCycle: 5,
            };
        });
    }

    return (
        <MainTemplate>
            <Container>
                <button onClick={handleClick}>Clique aqui</button>
            </Container>

            <Container>
                <CountDown />
            </Container>
            
            <Container>
                <MainForm />
            </Container>
        </MainTemplate>
    );
}
