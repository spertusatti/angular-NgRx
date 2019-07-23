import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCounter2Component } from './my-counter2.component';
import { counterReducerM2 } from './m2.reducer';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    MyCounter2Component
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('countM3', counterReducerM2 ),
    EffectsModule.forFeature([ShipsEffects])
  ],
  exports: [
    MyCounter2Component
  ],
})
export class MyCounter2Module { }