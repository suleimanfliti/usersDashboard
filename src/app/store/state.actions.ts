import { createAction, props } from '@ngrx/store';
import { State } from './state.model';

export const setState = createAction('[State Page] State', props<State>());
