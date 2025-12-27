import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useState } from "react";

export function MainForm() {
    const [taskName, setTaskName] = useState('')

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log("Teste testando....")
    }


    return (
        <form className="form" action="" onSubmit={handleCreateNewTask}>
            <div className='formRow'>
                <DefaultInput
                    labelText='atividade'
                    id='input'
                    type='text'
                    placeholder='Nome da tarefa'
                    value={taskName}
                    onChange={event =>setTaskName(event.target.value)}
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