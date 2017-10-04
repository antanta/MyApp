"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./Components/home.component");
var standards_component_1 = require("./Components/standards.component");
var students_component_1 = require("./Components/students.component");
var teachers_component_1 = require("./Components/teachers.component");
var courses_component_1 = require("./Components/courses.component");
var random_file_generator_component_1 = require("./Components/random.file.generator.component");
exports.routingConfiguration = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'standards', component: standards_component_1.StandardsComponent },
    { path: 'students', component: students_component_1.StudentsComponent },
    { path: 'teachers', component: teachers_component_1.TeachersComponent },
    { path: 'courses', component: courses_component_1.CoursesComponent },
    { path: 'rngfile', component: random_file_generator_component_1.RandomFileGeneratorComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
//# sourceMappingURL=routing.configuration.js.map