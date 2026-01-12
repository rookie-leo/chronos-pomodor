import {  useEffect, useReducer } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkManager";
import { TaskActionsTypes } from "./taskActions";

type TaskContextProviderProps = {
    children: React.ReactNode
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState);

    const worker = TimerWorkerManager.getInstance()
    worker.onmessage(e => {
        const countDownSeconds = e.data
        console.log(countDownSeconds)

        dispatch({
            type: TaskActionsTypes.COUNT_DOWN,
            payload: { secondsRemaining: countDownSeconds }
        })

        if (countDownSeconds < 1) {
            console.log("Worker COMPLETED")
            worker.terminate()
        }
    })

    useEffect(() => {
        if (!state.activeTask) {
            console.log("Worker encerrado por falta de activeTask")
            worker.terminate()
        }

        worker.postMessage(state)
    }, [worker, state])

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}