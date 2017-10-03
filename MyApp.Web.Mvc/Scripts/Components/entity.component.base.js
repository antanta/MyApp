"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EntityComponentBase = /** @class */ (function () {
    function EntityComponentBase(readerService, className) {
        this.entities = [];
        debugger;
        this.readerService = readerService;
        this.readerService.className = className;
    }
    EntityComponentBase.prototype.ngOnInit = function () {
        var that = this;
        this.readerService.getEntities()
            .then(function (res) {
            that.entities = res;
        });
    };
    return EntityComponentBase;
}());
exports.EntityComponentBase = EntityComponentBase;
//# sourceMappingURL=entity.component.base.js.map