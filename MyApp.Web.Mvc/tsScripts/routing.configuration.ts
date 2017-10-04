import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./Components/home.component";

import { StandardsComponent } from './Components/standards.component';
import { StudentsComponent } from './Components/students.component';
import { TeachersComponent } from "./Components/teachers.component";
import { CoursesComponent } from "./Components/courses.component";
import { RandomFileGeneratorComponent } from "./Components/random.file.generator.component";

export const routingConfiguration: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'standards', component: StandardsComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'teachers', component: TeachersComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'rngfile', component: RandomFileGeneratorComponent },
    { path: '**', component: HomeComponent }
];