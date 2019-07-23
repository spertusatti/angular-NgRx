import {Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { incrementM2, decrementM2, resetM2 } from './m2.actions';

@Component({
  selector: 'app-my-counter2',
  templateUrl: './my-counter2.component.html',
})

export class MyCounter2Component {
  count$: Observable<number>;

  constructor(private store: Store<{ countM2: number }>) {
    this.count$ = store.pipe(select('countM2'));
  }

  increment() {
    this.store.dispatch(incrementM2());
  }
  
  decrement() {
    this.store.dispatch(decrementM2());
  }
  
  reset() {
    this.store.dispatch(resetM2());
  }
}
