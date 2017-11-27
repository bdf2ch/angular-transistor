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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_component_1 = require("../modal.component");
var ModalFooterComponent = (function () {
    function ModalFooterComponent(parent, element) {
        this.parent = parent;
        this.element = element;
        if (!parent) {
            console.log('angular-transistor: \'modal-footer\' component must be used only inside \'modal\' component');
        }
    }
    ;
    ModalFooterComponent.prototype.ngAfterViewChecked = function () {
        console.log('modal-footer height: ', this.element.nativeElement.clientHeight);
        this.parent.footerHeight = this.element.nativeElement.clientHeight;
    };
    ;
    return ModalFooterComponent;
}());
ModalFooterComponent = __decorate([
    core_1.Component({
        selector: 'modal-footer',
        templateUrl: './modal-footer.component.html',
        styles: [require('./modal-footer.component.css').toString()]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.Host()),
    __metadata("design:paramtypes", [modal_component_1.ModalComponent,
        core_1.ElementRef])
], ModalFooterComponent);
exports.ModalFooterComponent = ModalFooterComponent;
//# sourceMappingURL=modal-footer.component.js.map