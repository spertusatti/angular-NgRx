import { createReducer, on } from '@ngrx/store';
import { incrementM1, decrementM1, resetM1} from './m1.actions';

export const m1InitialState = 0;

export const counterReducerM1 = createReducer(m1InitialState,
on(incrementM1, state => state + 1),
on(decrementM1, state => state - 1),
on(resetM1, state => 0),
)
