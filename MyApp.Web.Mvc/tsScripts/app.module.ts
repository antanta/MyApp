/* Boot file. Meeting point for the application */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule, ButtonModule, ProgressBarModule, GrowlModule, DataGridModule, BlockUIModule, PanelModule } from 'primeng/primeng';
import { JsonpModule, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BarComponent } from './Components/bar.component';

import { HomeComponent } from './Components/home.component';
import { MenuComponent } from './Components/menu.component';

import { StandardsComponent, StandardReader } from './Components/standards.component';
import { StudentsComponent, StudentReader } from './Components/students.component';
import { TeachersComponent, TeacherReader } from './Components/teachers.component'
import { CoursesComponent, CourseReader } from './Components/courses.component'

import { RandomFileGenerateService } from './Services/RandomFileGenerateService'
import { RandomFileGeneratorComponent } from './Components/random.file.generator.component';

import { Routes, RouterModule } from "@angular/router";
import { routingConfiguration } from './routing.configuration';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MenuComponent,

        StandardsComponent,
        StudentsComponent,
        TeachersComponent,
        CoursesComponent,

        BarComponent,
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
        PanelModule,

        /* Application routing */
        RouterModule.forRoot(routingConfiguration, { useHash: true })
    ],
    providers: [
        /* Reader service implementations */
        StandardReader,
        StudentReader,
        TeacherReader,
        CourseReader,

        RandomFileGenerateService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }