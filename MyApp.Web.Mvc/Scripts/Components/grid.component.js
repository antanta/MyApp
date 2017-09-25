"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GridComponent = /** @class */ (function () {
    function GridComponent() {
        this.standards = [];
    }
    GridComponent.prototype.ngOnInit = function () {
        var that = this;
        $.ajax({
            url: 'http://localhost:62901/api/standard',
            dataType: 'jsonp',
            type: 'GET',
            crossDomain: true,
            success: function (data) {
                that.standards = data;
            },
            error: function (jqXHR, status, error) {
                alert('error');
            }
        });
        //this.carService.getCarsLarge().then(standards => this.standards = standards);
    };
    GridComponent = __decorate([
        core_1.Component({
            selector: 'grid-component',
            templateUrl: '../Templates/Components/grid.component.html',
            styleUrls: ['../Styles/Components/grid.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;
//# sourceMappingURL=grid.component.js.map