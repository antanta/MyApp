/* Boot file. Meeting point for the application */

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule, ButtonModule, ProgressBarModule, GrowlModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { BarComponent } from './Components/bar.component';

@NgModule({
    declarations: [
        AppComponent,
        BarComponent
    ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      InputTextModule,
      ButtonModule,
      ProgressBarModule,
      GrowlModule
  ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
