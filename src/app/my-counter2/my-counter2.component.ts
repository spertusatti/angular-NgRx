import {Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';

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
    this.store.dispatch(increment());
  }
  
  decrement() {
    this.store.dispatch(decrement());
  }
  
  reset() {
    this.store.dispatch(reset());
  }
}
