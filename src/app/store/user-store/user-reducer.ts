import { createReducer, on, ActionReducer, INIT, UPDATE } from "@ngrx/store";
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

export const metaReducerLocalStorage = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === INIT || action.type == UPDATE) {
      const storageValue = localStorage.getItem("state");
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem("state");
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem("state", JSON.stringify(nextState));
    return nextState;
  };
};