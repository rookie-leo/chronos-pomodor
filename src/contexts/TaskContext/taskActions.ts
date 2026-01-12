import type { TaskModel } from "../../models/TaskModel"

export enum TaskActionsTypes {
    START_TASK = 'START_TASK',
    INTERRUPT_TASK = 'INTERRUPT_TASK',
    RESET_STATE = 'RESET_STATE',
    COUNT_DOWN = 'COUNT_DOWN',
    COMPLETE_TASK = 'COMPLETE_TASK',
}

export type TaskActionsModelWithPayload =
    | {
        type: TaskActionsTypes.START_TASK,
        payload: TaskModel
    }
    | {
        type: TaskActionsTypes.COUNT_DOWN,
        payload: {secondsRemaining: number}
    }
    

export type TaskActionsModelWithOutPayload =
    | {
        type: TaskActionsTypes.START_TASK
    }
    | {
        type: TaskActionsTypes.COUNT_DOWN
    }
    | {
        type: TaskActionsTypes.INTERRUPT_TASK,
    }