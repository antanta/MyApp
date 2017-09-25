/* Boot file. Meeting point for the application */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule, ButtonModule, ProgressBarModule, GrowlModule, DataGridModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { BarComponent } from './Components/bar.component';
import { GridComponent } from './Components/grid.component';

@NgModule({
    declarations: [
        AppComponent,
        BarComponent,
        GridComponent
    ],
    imports: [
      /* Angular modules */
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,

      /* Primeng modules */
      InputTextModule,
      ButtonModule,
      ProgressBarModule,
      GrowlModule,
      DataGridModule
  ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
