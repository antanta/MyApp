"use strict";
/// <reference path ="../../Scripts/typings/jquery/jquery.d.ts"/> 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BarComponent = /** @class */ (function () {
    function BarComponent() {
        this.value = 0;
    }
    BarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var interval = setInterval(function () {
            _this.value = _this.value + Math.floor(Math.random() * 10) + 1;
            if (_this.value >= 100) {
                _this.value = 100;
                _this.msgs = [{ severity: 'info', summary: 'Success', detail: 'Process Completed' }];
                clearInterval(interval);
            }
        }, 2000);
    };
    BarComponent = __decorate([
        core_1.Component({
            selector: 'bar-component',
            templateUrl: '../Templates/Components/bar.component.html'
        })
    ], BarComponent);
    return BarComponent;
}());
exports.BarComponent = BarComponent;
//# sourceMappingURL=bar.component.js.map