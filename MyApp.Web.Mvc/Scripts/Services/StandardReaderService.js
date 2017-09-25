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
//import 'rxjs/add/operator/map';
require("rxjs/add/operator/toPromise"); //!!!
var StandardReaderService = /** @class */ (function () {
    function StandardReaderService(communicator) {
        this.communicator = communicator;
    }
    StandardReaderService.prototype.getStandards = function () {
        return this.communicator.get("http://localhost:62901/api/standard?callback=JSONP_CALLBACK")
            .toPromise()
            .then(function (res) {
            return res.json();
        });
    };
    StandardReaderService.prototype.getStandardsjQuery = function () {
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
    };
    StandardReaderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Jsonp])
    ], StandardReaderService);
    return StandardReaderService;
}());
exports.StandardReaderService = StandardReaderService;
//# sourceMappingURL=StandardReaderService.js.map