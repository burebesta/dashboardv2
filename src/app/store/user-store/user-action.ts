import { createAction,props} from '@ngrx/store'
import { User } from './user-reducer'

export const registerUser = createAction('[Login Page] Register User' ,props<User>())
export const userLogOut = createAction('[Admin Page] Log Out User')

