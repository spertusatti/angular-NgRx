import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCounter2Component } from './my-counter2.component';
import { counterReducerM2 } from './m2.reducer';

import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    MyCounter2Component
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('countM2', counterReducerM2)
  ],
  exports: [
    MyCounter2Component
  ],
})
export class MyCounter2Module { }