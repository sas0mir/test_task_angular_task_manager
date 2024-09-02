import { createReducer, on } from "@ngrx/store";
import { addTask, updateTask, removeTask, initTasks } from "./task.actions";
import { ITask } from "../constants";
import { cloneDeep } from "lodash";

export const initialState = {
    tasks: []
};

export const taskReducer = createReducer(
    initialState,
    on(initTasks, (state: any, {tasks}) => {
        return {...state, tasks: tasks}
    }),
    on(addTask, (state: any, {task}) => {
        let newTasks = cloneDeep(state.tasks);
        newTasks.push(task)
        return {...state, tasks: newTasks}
    }),
    on(updateTask, (state: any, {task}) => {
        const newTasks = state.tasks.map((item: ITask, idx: Number) => {
            if (item.id === task.id) return task
            else return item
        })
        return {...state, tasks: newTasks}
    }),
    on(removeTask, (state: any, {task}) => {
        const newTasks = state.tasks.filter((item: ITask) => item.id !== task.id)
        return {...state, tasks: newTasks}
    })
)