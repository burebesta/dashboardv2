import { createReducer, on } from "@ngrx/store";
import { showMenu,hideMenu,resizeWindow } from "./store-actions";


export interface menuState {
  show: boolean,
  number: number
}

export const initialMenuState: menuState = {
  show: false,
  number: 10
}

export const menuReducer = createReducer(
  initialMenuState,
  on(showMenu, (state) => {
    return {show:true, number: state.number}
  }),
  on(hideMenu, (state) => {
    return {show:false, number: state.number}
  }),
  on(resizeWindow, (state,number:any)=>{
    let show = state.show
    if(number.number>1280){
      show = false
    }
    return {show:show, number: number.number}
  })
)
