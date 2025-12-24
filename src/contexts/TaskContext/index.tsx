import { createContext, useContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";

const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15,
    }
};

type TaskContextProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

const intialContextValue = {
    state: initialState,
    setState: () => { },
}

export const TaskContext = createContext<TaskContextProps>(intialContextValue);

type TaskContextProviderProps = {
    children: React.ReactNode
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    return (
        <TaskContext.Provider value={intialContextValue}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTaskContext() {
    return useContext(TaskContext);
}