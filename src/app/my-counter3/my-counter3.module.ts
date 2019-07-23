import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCounter3Component } from './my-counter3.component';

import { StoreModule } from '@ngrx/store';
import { counterReducerM3 } from './m3.reducer';

@NgModule({
  declarations: [MyCounter3Component],
  imports: [
    CommonModule,
    StoreModule.forFeature('countM3', counterReducerM3)
  ],
  exports: [
    MyCounter3Component
  ],
})
export class MyCounter3Module { }