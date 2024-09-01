import { createReducer, on } from "@ngrx/store";
import { addTask, updateTask, removeTask, initTasks } from "./task.actions";
import { ITask } from "../constants";

export const initialState = {
    tasks: []
};

export const taskReducer = createReducer(
    initialState,
    on(initTasks, (state: any, {tasks}) => {
        console.log('REDUCER-INIT->', tasks);
        return {...state, tasks: tasks}
    }),
    on(addTask, (state: any, {task}) => {
        console.log('REDUCER-ADD->', state, task);
        const newTasks = state.tasks.push(task);
        return {...state, tasks: newTasks}
    }),
    on(updateTask, (state: any, {task}) => {
        console.log('REDUCER-UPDATE->', state, task);

        return {...state, tasks: [...state.tasks, task]}
    }),
    on(removeTask, (state: any, {task}) => {
        console.log('REDUCER-REMOVE->', state, task);
        return state
    })
)