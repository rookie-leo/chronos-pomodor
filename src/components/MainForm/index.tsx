import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import type { HomeProps } from "../../pages/Home";

export function MainForm({ state, setState }: HomeProps) {
    function handleClick() {
        setState(prevState => {
            return {
                ...prevState,
                config: {
                    ...prevState.config,
                    workTime: 15,
                },
                formattedSecondsRemaining: '15:00',
            }
        })
    }

    return (
        <form className="form" action="">
            <div>
                <button onClick={handleClick}>Cliacar</button>
            </div>

            <div className='formRow'>
                <DefaultInput
                    labelText='atividade'
                    id='input'
                    type='text'
                    placeholder='Nome da tarefa'
                />
            </div>

            <div className='formRow'>
                <p>Próximo intervalo: {state.config.workTime} min</p>
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