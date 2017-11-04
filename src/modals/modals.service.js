"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ModalsService = (function () {
    function ModalsService() {
        /**/
        this.modals = [];
    }
    /**
     *
     * @param {ModalComponent} modal
     */
    ModalsService.prototype.register = function (modal) {
        this.modals.push(modal);
    };
    ;
    /**
     *
     * @param {string} modalId
     * @returns {ModalComponent}
     */
    ModalsService.prototype.get = function (modalId) {
        var findModalById = function (modal) { return modal.id === modalId; };
        var modal = this.modals.find(findModalById);
        return modal ? modal : null;
    };
    ;
    return ModalsService;
}());
ModalsService = __decorate([
    core_1.Injectable()
], ModalsService);
exports.ModalsService = ModalsService;
//# sourceMappingURL=modals.service.js.map