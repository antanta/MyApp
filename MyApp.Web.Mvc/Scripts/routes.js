"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_component_1 = require("./app.component");
var standards_component_1 = require("./Components/standards.component");
var students_component_1 = require("./Components/students.component");
exports.routingConfiguration = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'find', redirectTo: 'search' },
    { path: 'home', component: app_component_1.AppComponent },
    { path: 'standards', component: standards_component_1.StandardsComponent },
    { path: 'students', component: students_component_1.StudentsComponent },
    { path: '**', component: app_component_1.AppComponent }
];
//# sourceMappingURL=routes.js.map