import { createFeatureSelector, createSelector } from '@ngrx/store'
import { User } from './user-reducer'
 
export const userCredentials = createSelector(
  createFeatureSelector('userCredentials'),
  (state:User)=> state
)