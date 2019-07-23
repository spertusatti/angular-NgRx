import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCounter1Component } from './my-counter1.component';
import { counterReducerM1, counterReducerM11 } from './store';

import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [MyCounter1Component],
  imports: [
    CommonModule,
    StoreModule.forFeature('M1Store', {
      m1: counterReducerM1,
      m11: counterReducerM11,
    }),
  ],
  exports: [MyCounter1Component],
})
export class MyCounter1Module { }