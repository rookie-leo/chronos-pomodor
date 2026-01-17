import type { TaskModel } from "../../models/TaskModel"
import type { TaskStateModel } from "../../models/TaskStateModel"

export const TaskActionsTypes = {
    START_TASK: 'START_TASK',
    INTERRUPT_TASK: 'INTERRUPT_TASK',
    COMPLETE_TASK: 'COMPLETE_TASK',
    COUNT_DOWN: 'COUNT_DOWN',
    RESET_STATE: 'RESET_STATE',
    CHANGE_SETTINGS: 'CHANGE_SETTINGS'
} as const

export type TaskActionType =
    typeof TaskActionsTypes[keyof typeof TaskActionsTypes]


export type TaskActionsModelWithPayload =
    | {
        type: typeof TaskActionsTypes.START_TASK,
        payload: TaskModel
    }
    | {
        type: typeof TaskActionsTypes.COUNT_DOWN,
        payload: {secondsRemaining: number}
    }    
    | {
        type: typeof TaskActionsTypes.CHANGE_SETTINGS,
        payload: TaskStateModel['config']
    }
    

export type TaskActionsModelWithOutPayload =
    | {
        type: typeof TaskActionsTypes.START_TASK
    }
    | {
        type: typeof TaskActionsTypes.COUNT_DOWN
    }
    | {
        type: typeof TaskActionsTypes.INTERRUPT_TASK,
    }