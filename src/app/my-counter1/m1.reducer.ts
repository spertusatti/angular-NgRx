import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset} from './m1.actions';

export const m1InitialState = 0;

export const counterReducer = createReducer(m1InitialState,
on(increment, state => state + 1),
on(decrement, state => state - 1),
on(reset, state => 0),
)
