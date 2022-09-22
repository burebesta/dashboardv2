import { createFeatureSelector, createSelector } from '@ngrx/store'

export const selectNumbers = createSelector(
  createFeatureSelector('numbers'), 
  state => state
)
