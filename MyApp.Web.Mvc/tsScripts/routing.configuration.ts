import { Routes, RouterModule } from "@angular/router";

import { StandardsComponent, StandardReader } from './Components/standards.component';
import { StudentsComponent, StudentReader } from './Components/students.component';
import { HomeComponent } from "./Components/home.component";

export const routingConfiguration: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'standards', component: StandardsComponent },
    { path: 'students', component: StudentsComponent },
    { path: '**', component: HomeComponent } /* or a 404 */
];