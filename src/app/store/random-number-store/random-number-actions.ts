import { createAction,props } from "@ngrx/store";
import { NumberInterface } from "./number.interface";

export const loadLikesNumbers = createAction('[Admin Panel] Load Likes Numbers',props<NumberInterface>())
export const loadTargetsNumbers = createAction('[Admin Panel] Load Targets Numbers',props<NumberInterface>())
export const loadLikesNumbersSuccess = createAction('[Number API] Likes Numbers Loaded Success',props<NumberInterface>())
export const loadTargetsNumbersSuccess = createAction('[Number API] Targets Numbers Loaded Success',props<NumberInterface>())