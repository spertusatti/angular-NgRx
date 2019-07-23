import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCounter1Module } from './my-counter1/my-counter1.module';
import { MyCounter2Module } from './my-counter2/my-counter2.module';
import { MyCounter3Module } from './my-counter3/my-counter3.module';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ 
      BrowserModule ,
      MyCounter1Module,
      MyCounter2Module,
      MyCounter3Module,
      StoreModule.forRoot({ count: counterReducer })
    ],
    providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/