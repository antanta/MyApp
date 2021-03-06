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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise"); //!!!
var RandomFileGenerateService = /** @class */ (function () {
    function RandomFileGenerateService(communicator) {
        this.communicator = communicator;
    }
    RandomFileGenerateService.prototype.generateRandomFiles = function (numberOfFiles) {
        var _this = this;
        return this.communicator.get("/randomFileGenerator/GenerateRandomFiles?numberOfFiles=" + numberOfFiles)
            .toPromise()
            .then(function (res) {
            var result = res.json();
            _this.fillPathForFile(result);
            return result;
        })
            .catch(function (res3) {
            return res3;
        });
    };
    RandomFileGenerateService.prototype.fillPathForFile = function (files) {
        for (var i = 0; i < files.length; i++) {
            var curFile = files[i];
            curFile.Path = '/download/downloadfile?fileName=' + encodeURI(curFile.Name);
        }
    };
    RandomFileGenerateService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], RandomFileGenerateService);
    return RandomFileGenerateService;
}());
exports.RandomFileGenerateService = RandomFileGenerateService;
//# sourceMappingURL=RandomFileGenerateService.js.map