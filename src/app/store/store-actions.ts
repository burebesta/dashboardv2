import { createAction,props } from '@ngrx/store'

export const showMenu = createAction('[Admin Panel] show Menu')
export const hideMenu = createAction('[Admin Panel] hide Menu')
export const resizeWindow = createAction('[Admin Panel Resize Window', props<({number: Number})>())

