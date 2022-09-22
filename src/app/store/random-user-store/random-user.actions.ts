import { createAction, props } from "@ngrx/store";

export const loadUsers=createAction('[Meeting Component] Load Users',props<({count: Number})>())
export const loadUsersSuccess=createAction('[Meeting Component] Load Users Success', props<any>())