import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { incrementM1, decrementM1, resetM1 } from './m1.actions';
import { incrementM2, decrementM2, resetM2 } from '../my-counter2/m2.actions';

@Component({
  selector: 'app-my-counter1',
  templateUrl: './my-counter1.component.html',
})
export class MyCounter1Component {
  count$: Observable<number>;
  count2$: Observable<number>;
  count3$: Observable<number>;

  constructor(
      private store: Store<{ countM1: any }>
    ) {
    this.count$ = store.pipe(select('countM1'));
    this.count2$ = store.pipe(select('countM2'));
    this.count3$ = store.pipe(select('countM3'));
  }

  increment() {
    this.store.dispatch(incrementM1());
  }
  incrementM2() {
    this.store.dispatch(incrementM2());
  }
  
  decrement() {
    this.store.dispatch(decrementM1());
  }
  
  reset() {
    this.store.dispatch(resetM1());
  }
}