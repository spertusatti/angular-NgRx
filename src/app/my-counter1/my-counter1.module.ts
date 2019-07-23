import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCounter1Component } from './my-counter1.component';

@NgModule({
  declarations: [MyCounter1Component],
  exports: [MyCounter1Component],
  imports: [
    CommonModule
  ],
})
export class MyCounter1Module { }