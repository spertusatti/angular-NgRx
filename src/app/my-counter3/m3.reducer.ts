import { createReducer, on } from '@ngrx/store';
import { incrementM3, decrementM3, resetM3 } from './m3.actions';

export const m3InitialState = 0;

export const counterReducerM3 = createReducer(m3InitialState,
  on(incrementM3, state => state + 1),
  on(decrementM3, state => state - 1),
  on(resetM3, state =>  0),
)