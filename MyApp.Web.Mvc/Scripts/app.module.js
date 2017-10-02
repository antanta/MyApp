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
var grid_component_1 = require("./Components/grid.component");
var StandardReaderService_1 = require("./Services/StandardReaderService");
var RandomFileGenerateService_1 = require("./Services/RandomFileGenerateService");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                bar_component_1.BarComponent,
                grid_component_1.GridComponent
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
                primeng_1.DataGridModule
            ],
            providers: [
                StandardReaderService_1.StandardReaderService,
                RandomFileGenerateService_1.RandomFileGenerateService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map