import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCounter1Component } from './my-counter1.component';
import { counterReducerM1 } from './m1.reducer';
import { counterReducerM11 } from './m11.reducer';

import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [MyCounter1Component],
  imports: [
    CommonModule,
    StoreModule.forFeature('countM1', {
      m1: counterReducerM1,
      m11: counterReducerM11,
    }),
  ],
  exports: [MyCounter1Component],
})
export class MyCounter1Module { }