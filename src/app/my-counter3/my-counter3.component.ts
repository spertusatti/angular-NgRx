import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { incrementM3, decrementM3, resetM3 } from './m3.actions';
import { incrementM11 } from '../my-counter1/m11.actions';

@Component({
  selector: 'app-my-counter3',
  templateUrl: './my-counter3.component.html',
})
export class MyCounter3Component {
  count$: Observable<number>;

  constructor(private store: Store<{ countM3: number }>) {
    this.count$ = store.pipe(select('countM3'));
  }

  increment() {
    this.store.dispatch(incrementM3());
    this.store.dispatch(incrementM11());
  }

  decrement() {
    this.store.dispatch(decrementM3());
  }

  reset() {
    this.store.dispatch(resetM3());
  }
}