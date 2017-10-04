"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var standards_component_1 = require("./Components/standards.component");
var students_component_1 = require("./Components/students.component");
var home_component_1 = require("./Components/home.component");
exports.routingConfiguration = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'standards', component: standards_component_1.StandardsComponent },
    { path: 'students', component: students_component_1.StudentsComponent },
    { path: '**', component: home_component_1.HomeComponent } /* or a 404 */
];
//# sourceMappingURL=routing.configuration.js.map