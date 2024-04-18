import { Action, createReducer, on } from '@ngrx/store';
import * as StateActions from './state.actions';
import { initialState } from './state.model';
export const stateReducer = createReducer(
  initialState,
  on(StateActions.setState, (state, action) => ({
    ...state,
    ...action,
  }))
);
