import { createReducer, on } from "@ngrx/store";
import { registerUser, userLogOut } from "../user-store/user-action";

export interface User {
  email: string,
  password: string,
  isLogged: boolean
}

export const initialUserState: User = {
  email: '',
  password: '',
  isLogged: false
}

export const userReducer = createReducer(
  initialUserState,
  on(registerUser, (state,userDetails) => {
    return {
      email: userDetails.email,
      password: userDetails.email,
      isLogged: true
    }
  }),
  on(userLogOut, ()=>{
    return {
      email: '',
      password: '',
      isLogged: false
    }
  })
)
  