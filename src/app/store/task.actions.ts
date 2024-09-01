import { createAction, props } from "@ngrx/store";
import { ITask } from "../constants";

export const initTasks = createAction('[Task Component] init', props<{tasks: ITask[]}>())
export const addTask = createAction('[Task Component] add', props<{task: ITask}>());
export const updateTask = createAction('[Task Component] update', props<{task: ITask}>());
export const removeTask = createAction('[Task Component] remove', props<{task: any}>());