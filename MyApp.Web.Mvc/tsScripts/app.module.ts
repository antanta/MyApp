/* Boot file. Meeting point for the application */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule, ButtonModule, ProgressBarModule, GrowlModule, DataGridModule, BlockUIModule, PanelModule } from 'primeng/primeng';
import { JsonpModule, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BarComponent } from './Components/bar.component';

import { StandardsComponent } from './Components/standards.component';
import { StudentsComponent } from './Components/students.component';

import { GenericReaderService } from './Services/GenericReaderService'
import { RandomFileGenerateService } from './Services/RandomFileGenerateService'

import { RandomFileGeneratorComponent } from './Components/random.file.generator.component';

@NgModule({
    declarations: [
        AppComponent,
        BarComponent,
        StandardsComponent,
        StudentsComponent,
        RandomFileGeneratorComponent
    ],
    imports: [
        /* Angular modules */
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        JsonpModule,
        HttpModule,

        /* Primeng modules */
        InputTextModule,
        ButtonModule,
        ProgressBarModule,
        GrowlModule,
        DataGridModule,
        BlockUIModule,
        PanelModule
    ],
    providers: [
        GenericReaderService,
        RandomFileGenerateService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
