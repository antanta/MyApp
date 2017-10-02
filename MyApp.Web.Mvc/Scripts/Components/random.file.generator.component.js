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
var RandomFileGenerateService_1 = require("../Services/RandomFileGenerateService");
var RandomFileGeneratorComponent = /** @class */ (function () {
    function RandomFileGeneratorComponent(randomFileGenerateService) {
        this.randomFileGenerateService = randomFileGenerateService;
        this.blockedDocument = false;
        this.maxNumberOfFiles = 10;
    }
    RandomFileGeneratorComponent.prototype.onGenerateClick = function () {
        var t;
        var num = parseInt(this.numberOfFiles);
        if (isNaN(num)) {
            return;
        }
        if (num > this.maxNumberOfFiles) {
            num = this.maxNumberOfFiles;
            this.numberOfFiles = String(this.maxNumberOfFiles);
        }
        var that = this;
        this.blockedDocument = true;
        this.randomFileGenerateService
            .generateRandomFiles(num)
            .then(function (res) {
            that.filesMetadata = res;
            that.blockedDocument = false;
        });
    };
    RandomFileGeneratorComponent = __decorate([
        core_1.Component({
            selector: 'random-file-generator-component-component',
            templateUrl: '../Templates/Components/random.file.generator.component.html',
            styleUrls: ['../Styles/Components/random.file.generator.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [RandomFileGenerateService_1.RandomFileGenerateService])
    ], RandomFileGeneratorComponent);
    return RandomFileGeneratorComponent;
}());
exports.RandomFileGeneratorComponent = RandomFileGeneratorComponent;
//# sourceMappingURL=random.file.generator.component.js.map