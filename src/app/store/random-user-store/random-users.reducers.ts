import { loadUsers, loadUsersSuccess } from "./random-user.actions";
import { createReducer, on } from "@ngrx/store";

const initialUserState:any = {
  avatar: [],
  name: []
}

export const randomUserReducer = createReducer(
  initialUserState,
  on(loadUsers, ()=>{
    return {
      avatar: [],
      name: []
    }
  }),
  on(loadUsersSuccess, (state,data:any)=>{
    return data.payload
  })
)