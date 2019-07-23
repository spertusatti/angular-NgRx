import { createReducer, on } from '@ngrx/store';
import { incrementM2, decrementM2, resetM2} from './m2.actions';

export const m2InitialState = 0;

export const counterReducerM2 = createReducer(m2InitialState,
on(incrementM2, state => state + 1),
on(decrementM2, state => state - 1),
on(resetM2, state => 0),
)