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
var CourseReader = /** @class */ (function (_super) {
    __extends(CourseReader, _super);
    function CourseReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CourseReader = __decorate([
        core_1.Injectable()
    ], CourseReader);
    return CourseReader;
}(GenericReaderService_1.GenericReaderService));
exports.CourseReader = CourseReader;
var CoursesComponent = /** @class */ (function (_super) {
    __extends(CoursesComponent, _super);
    function CoursesComponent(readerService) {
        return _super.call(this, readerService) || this;
    }
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'students-component',
            templateUrl: '../Templates/Components/courses.component.html',
            styleUrls: ['../Styles/Components/entity.component.base.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [CourseReader])
    ], CoursesComponent);
    return CoursesComponent;
}(entity_component_base_1.EntityComponentBase));
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map