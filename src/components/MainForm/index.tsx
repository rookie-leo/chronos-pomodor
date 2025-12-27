import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useTaskContext } from "../../contexts/TaskContext";

export function MainForm() {
    const { setState } = useTaskContext()

    function handleClick() {
        setState(prevState => {
            return {
                ...prevState,
                formattedSecondsRemaining: '13:03'
            };
        });
    }

    return (
        <form className="form" action="">
            <button type="button" onClick={handleClick}>clique aqui</button>
            <div className='formRow'>
                <DefaultInput
                    labelText='atividade'
                    id='input'
                    type='text'
                    placeholder='Nome da tarefa'
                />
            </div>

            <div className='formRow'>
                <p>Próximo intervalo: 15min</p>
            </div>

            <div className='formRow'>
                <Cycles />
            </div>

            <div className='formRow'>
                <DefaultButton icon={<PlayCircleIcon />} />
                <DefaultButton icon={<StopCircleIcon />} color='red' />
            </div>
        </form>
    )
}