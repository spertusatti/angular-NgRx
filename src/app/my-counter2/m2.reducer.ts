import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset} from './m2.actions';

export const m2InitialState = 0;

export const counterReducer = createReducer(m2InitialState,
on(increment, state => state + 1),
on(decrement, state => state - 1),
on(reset, state => 0),
)