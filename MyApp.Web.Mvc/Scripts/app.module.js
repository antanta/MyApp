"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Boot file. Meeting point for the application */
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var primeng_1 = require("primeng/primeng");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var bar_component_1 = require("./Components/bar.component");
var home_component_1 = require("./Components/home.component");
var menu_component_1 = require("./Components/menu.component");
var standards_component_1 = require("./Components/standards.component");
var students_component_1 = require("./Components/students.component");
var teachers_component_1 = require("./Components/teachers.component");
var courses_component_1 = require("./Components/courses.component");
var RandomFileGenerateService_1 = require("./Services/RandomFileGenerateService");
var random_file_generator_component_1 = require("./Components/random.file.generator.component");
var router_1 = require("@angular/router");
var routing_configuration_1 = require("./routing.configuration");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                menu_component_1.MenuComponent,
                standards_component_1.StandardsComponent,
                students_component_1.StudentsComponent,
                teachers_component_1.TeachersComponent,
                courses_component_1.CoursesComponent,
                bar_component_1.BarComponent,
                random_file_generator_component_1.RandomFileGeneratorComponent
            ],
            imports: [
                /* Angular modules */
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.JsonpModule,
                http_1.HttpModule,
                /* Primeng modules */
                primeng_1.InputTextModule,
                primeng_1.ButtonModule,
                primeng_1.ProgressBarModule,
                primeng_1.GrowlModule,
                primeng_1.DataGridModule,
                primeng_1.BlockUIModule,
                primeng_1.PanelModule,
                /* Application routing */
                router_1.RouterModule.forRoot(routing_configuration_1.routingConfiguration, { useHash: true })
            ],
            providers: [
                /* Reader service implementations */
                standards_component_1.StandardReader,
                students_component_1.StudentReader,
                teachers_component_1.TeacherReader,
                courses_component_1.CourseReader,
                RandomFileGenerateService_1.RandomFileGenerateService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map