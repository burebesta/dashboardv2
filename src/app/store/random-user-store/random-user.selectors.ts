import { createFeatureSelector, createSelector } from '@ngrx/store'


export const randomUser = createSelector(
  createFeatureSelector('randomUser'),
  state=> state
)
