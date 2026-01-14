import type { TaskModel } from "../models/TaskModel";

export type SortTaskOptions = {
    field?: keyof TaskModel
    direction?: 'asc' | 'desc'
    tasks: TaskModel[]
}

export function sortTasks({
    field = 'startDate',
    direction = 'desc',
    tasks = []
}: SortTaskOptions): TaskModel[] {
    return [...tasks].sort((propsA, propsB) => {
        const aValue = propsA[field]
        const bValue = propsB[field]

        if (aValue === null && bValue === null) return 0
        if(aValue === null) return 1
        if (bValue === null) return -1

        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return direction === 'asc'
                ? aValue - bValue
                : bValue - aValue
        }

        if (typeof aValue === 'string' && typeof bValue === 'string') {
            return direction === 'asc'
                ? aValue.localeCompare(bValue)
                : bValue.localeCompare(aValue)
        }

        return 0
    })
}