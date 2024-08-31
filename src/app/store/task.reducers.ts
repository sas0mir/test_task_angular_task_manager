import { createReducer, on } from "@ngrx/store";
import { addToBoard, removeFromBoard } from "./task.actions";

export const initialState = {
    tasks: []
};

export const taskReducer = createReducer(
    initialState,
    on(addToBoard, (state: any, {task}) => {
        console.log('ON-ADD->', state, task);
        return {...state, tasks: [...state.tasks, task]}
    }),
    on(removeFromBoard, state => {
        console.log('ON-REMOVE->', state);
        return state
    })
)