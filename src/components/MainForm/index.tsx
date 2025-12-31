import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import type { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionsTypes } from "../../contexts/TaskContext/taskActions";

export function MainForm() {
    const { state, dispatch } = useTaskContext()
    const taskNameInput = useRef<HTMLInputElement>(null)
    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (!taskNameInput.current) return

        const taskName = taskNameInput.current.value.trim()

        if (!taskName) {
            alert('Insira o nome da tarefa')
            return
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType
        }

        dispatch({ type: TaskActionsTypes.START_TASK, payload: newTask })
    }

    function handleInterruptTask() {
        dispatch({ type: TaskActionsTypes.INTERRUPT_TASK })
    }

    return (
        <form className="form" action="" onSubmit={handleCreateNewTask}>
            <div className='formRow'>
                <DefaultInput
                    labelText='atividade'
                    id='input'
                    type='text'
                    placeholder='Nome da tarefa'
                    ref={taskNameInput}
                    disabled={!!state.activeTask}
                />
            </div>

            <div className='formRow'>
                <p>Próximo intervalo: 15min</p>
            </div>

            {state.currentCycle > 0 && (
                <div className='formRow'>
                    <Cycles />
                </div>)
            }

            <div className='formRow'>
                {!state.activeTask && (
                    <DefaultButton
                        aria-label="Iniciar nova tarefa"
                        title="Iniciar nova tarefa"
                        type="submit"
                        icon={<PlayCircleIcon />}
                        key='form_button'
                    />
                )}

                {!!state.activeTask && (
                    <DefaultButton
                        aria-label="Interromper tarefa atual"
                        title="Interromper tarefa atual"
                        type="button"
                        icon={<StopCircleIcon />}
                        color="red"
                        onClick={handleInterruptTask}
                        key='interrupt_button'
                    />
                )}
            </div>
        </form>
    )
}