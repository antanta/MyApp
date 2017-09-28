"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ASP.NET MVC 5 with Angular 4';
    }
    AppComponent.prototype.onClick = function () {
        this.message = 'Hello ' + this.name;
        debugger;
        $.ajax({
            url: 'http://localhost:9000/api/randomfilegenerator/GenerateRandomFiles',
            dataType: 'jsonp',
            type: 'GET',
            crossDomain: true,
            success: function (data) {
                debugger;
            },
            error: function (jqXHR, status, error) {
                debugger;
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '../Templates/app.component.html',
            styleUrls: ['../Styles/app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map