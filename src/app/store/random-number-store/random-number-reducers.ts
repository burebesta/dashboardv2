import { createReducer,on } from "@ngrx/store";
import { loadLikesNumbers,loadTargetsNumbers,loadLikesNumbersSuccess, loadTargetsNumbersSuccess } from "./random-number-actions";

export const initialNumberState:any = {
  likesNumbers: [],
  targetsNumbers: []
}

export const numberReducer = createReducer(
  initialNumberState,
  on(loadLikesNumbers, ()=>{
    return {
      likesNumbers: [],
      targetsNumbers: []
    }}),
  on(loadTargetsNumbers, ()=> {
    return {
      likesNumbers: [],
      targetsNumbers: []
    }
  }),
  on(loadLikesNumbersSuccess, (state, payload:any)=>{
    return {
      likesNumbers: payload.payload,
      targetsNumbers: state.targetsNumbers
    }
  }),
  on(loadTargetsNumbersSuccess, (state, payload:any)=>{
    return {
      likesNumbers: state.likesNumbers,
      targetsNumbers: payload.payload
    }
  })
)

  