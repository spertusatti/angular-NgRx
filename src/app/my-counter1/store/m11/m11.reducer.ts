import { createReducer, on } from '@ngrx/store';
import { incrementM11, decrementM11, resetM11} from './m11.actions';

export const m11InitialState = 0;

export const counterReducerM11 = createReducer(m11InitialState,
on(incrementM11, state => state + 1),
on(decrementM11, state => state - 1),
on(resetM11, state => 0),
)
