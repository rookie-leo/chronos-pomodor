import type { TaskStateModel } from "../../models/TaskStateModel";

type TipsProps = {
    state: TaskStateModel;
    nextCycleType: "workTime" | "shortBreakTime" | "longBreakTime";
}

export function Tips(props: TipsProps) {
    const tipsForWhenActiveTask = {
        workTime: <span>Foque por {props.state.config.workTime} minutos</span>,
        shortBreakTime: <span>Descanse por {props.state.config.shortBreakTime} minutos</span>,
        longBreakTime: <span>Descanso longo</span>
    };
    const tipsForNoActiveTask = {
        workTime: <span>Próximo ciclo e de {props.state.config.workTime} minutos</span>,
        shortBreakTime: <span>Próximo descanso é de {props.state.config.shortBreakTime} minutos</span>,
        longBreakTime: <span>Próximo ciclo é descanso</span>
    }
    return (
        <>
            {!!props.state.activeTask && tipsForWhenActiveTask[props.state.activeTask.type]}
            {!props.state.activeTask && tipsForNoActiveTask[props.nextCycleType]}
        </>
    )
}