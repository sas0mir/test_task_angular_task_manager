import { createAction, props } from "@ngrx/store";

export const addToBoard = createAction('[Item] Add To Board', props<{task: any}>());
export const removeFromBoard = createAction('[Item] Remove From Board', props<{task: any}>());