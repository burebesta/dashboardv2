import { createFeatureSelector, createSelector } from '@ngrx/store'
import { menuState } from './store.reducer'

export const menuStatus = createSelector(
  createFeatureSelector('menuStatus'),
  (state:menuState)=> state
)