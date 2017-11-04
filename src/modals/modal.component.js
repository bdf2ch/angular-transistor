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
var modals_service_1 = require("./modals.service");
var ModalComponent = (function () {
    /**
     *
     * @param {ModalsService} modals
     */
    function ModalComponent(modals) {
        this.modals = modals;
        /**/
        this.onClose = new core_1.EventEmitter();
        this.isOpened = false;
    }
    ;
    ModalComponent.prototype.ngOnInit = function () {
        this.modals.register(this);
    };
    ;
    ModalComponent.prototype.open = function () {
        this.isOpened = true;
    };
    ;
    ModalComponent.prototype.close = function () {
        this.isOpened = false;
        this.onClose.emit();
    };
    ;
    return ModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "caption", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ModalComponent.prototype, "depth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ModalComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ModalComponent.prototype, "height", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ModalComponent.prototype, "onClose", void 0);
ModalComponent = __decorate([
    core_1.Component({
        selector: 'modal',
        templateUrl: './modal.component.html',
        styleUrls: ['./modal.component.css']
    }),
    __metadata("design:paramtypes", [modals_service_1.ModalsService])
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map