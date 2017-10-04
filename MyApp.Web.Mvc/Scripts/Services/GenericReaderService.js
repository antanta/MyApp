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
require("rxjs/add/operator/toPromise");
var GenericReaderService = /** @class */ (function () {
    function GenericReaderService(communicator) {
        this.communicator = communicator;
    }
    GenericReaderService.prototype.getEntities = function () {
        return this.communicator.get("http://localhost:62901/api/" + this.className() + "?callback=JSONP_CALLBACK")
            .toPromise()
            .then(function (res) {
            return res.json();
        });
    };
    GenericReaderService.prototype.className = function () {
        var myString = this.constructor.name;
        var myRegexp = /^(.*?)(?:Reader)$/g;
        var match = myRegexp.exec(myString);
        if (match.length > 1) {
            return match[1];
        }
        else {
            throw Error("Invalid implementation for GenericReaderService<T>");
        }
    };
    GenericReaderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Jsonp])
    ], GenericReaderService);
    return GenericReaderService;
}());
exports.GenericReaderService = GenericReaderService;
//# sourceMappingURL=GenericReaderService.js.map