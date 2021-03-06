"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var entity_component_base_1 = require("./entity.component.base");
var GenericReaderService_1 = require("../Services/GenericReaderService");
var StudentReader = /** @class */ (function (_super) {
    __extends(StudentReader, _super);
    function StudentReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StudentReader = __decorate([
        core_1.Injectable()
    ], StudentReader);
    return StudentReader;
}(GenericReaderService_1.GenericReaderService));
exports.StudentReader = StudentReader;
var StudentsComponent = /** @class */ (function (_super) {
    __extends(StudentsComponent, _super);
    function StudentsComponent(readerService) {
        return _super.call(this, readerService) || this;
    }
    StudentsComponent = __decorate([
        core_1.Component({
            selector: 'students-component',
            templateUrl: '../Templates/Components/students.component.html',
            styleUrls: ['../Styles/Components/entity.component.base.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [StudentReader])
    ], StudentsComponent);
    return StudentsComponent;
}(entity_component_base_1.EntityComponentBase));
exports.StudentsComponent = StudentsComponent;
//# sourceMappingURL=students.component.js.map