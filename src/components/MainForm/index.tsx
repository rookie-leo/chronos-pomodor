import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
    return (
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