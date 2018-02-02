"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var angular_transistor_config_1 = require("../angular-transistor.config");
var ModalComponent = (function () {
    /**
     * Constructor
     * @param {ModalsService} modals
     */
    function ModalComponent(modals, renderer) {
        this.modals = modals;
        this.renderer = renderer;
        /**/
        this.onClose = new core_1.EventEmitter();
        this.width = angular_transistor_config_1.angularTransistorConfig.modalDefaultWidht;
        this.height = 0;
        this.depth = angular_transistor_config_1.angularTransistorConfig.modalDefaultDepth;
        this.modalHeight = 0;
        this.header = true;
        this.icon = null;
        this.contentHeight = 0;
        this.footerHeight = 0;
        // this.footer = false;
        this.isOpened = false;
        this.status = 'hidden';
        this.isHeader = true;
    }
    ;
    ModalComponent.prototype.ngOnInit = function () {
        this.modals.register(this);
    };
    ;
    ModalComponent.prototype.ngAfterViewChecked = function () {
        if (this.modal) {
            this.renderer.setStyle(this.content.element.nativeElement, 'height', this.header ? this.height - 60 : this.height);
        }
    };
    ;
    ModalComponent.prototype.open = function () {
        var _this = this;
        this.isOpened = true;
        window.setTimeout(function () {
            _this.status = 'shown';
        }, 50);
    };
    ;
    ModalComponent.prototype.close = function () {
        var _this = this;
        this.status = 'hidden';
        window.setTimeout(function () {
            _this.isOpened = false;
            _this.onClose.emit();
        }, 200);
    };
    ;
    return ModalComponent;
}());
__decorate([
    core_1.Input()
], ModalComponent.prototype, "id", void 0);
__decorate([
    core_1.Input()
], ModalComponent.prototype, "depth", void 0);
__decorate([
    core_1.Input()
], ModalComponent.prototype, "width", void 0);
__decorate([
    core_1.Input()
], ModalComponent.prototype, "height", void 0);
__decorate([
    core_1.Input()
], ModalComponent.prototype, "header", void 0);
__decorate([
    core_1.Input()
], ModalComponent.prototype, "caption", void 0);
__decorate([
    core_1.Input()
], ModalComponent.prototype, "icon", void 0);
__decorate([
    core_1.Output()
], ModalComponent.prototype, "onClose", void 0);
__decorate([
    core_1.ViewChild('modal', { read: core_1.ViewContainerRef })
], ModalComponent.prototype, "modal", void 0);
__decorate([
    core_1.ViewChild('content', { read: core_1.ViewContainerRef })
], ModalComponent.prototype, "content", void 0);
ModalComponent = __decorate([
    core_1.Component({
        selector: 'modal',
        templateUrl: './modal.component.html',
        styles: [require('./modal.component.css').toString()],
        animations: [
            animations_1.trigger('fog', [
                animations_1.state('shown', animations_1.style({
                    background: 'rgba(0, 0, 0, 0.3)'
                })),
                animations_1.state('hidden', animations_1.style({
                    background: 'rgba(0, 0, 0, 0.0)'
                })),
                animations_1.transition('hidden => shown', animations_1.animate('200ms linear')),
                animations_1.transition('shown => hidden', animations_1.animate('200ms linear')),
            ]),
            animations_1.trigger('modal', [
                animations_1.state('shown', animations_1.style({
                    transform: 'scale(1.0)'
                })),
                animations_1.state('hidden', animations_1.style({
                    transform: 'scale(0.01)'
                })),
                animations_1.transition('hidden => shown', animations_1.animate('100ms ease-in')),
                animations_1.transition('shown => hidden', animations_1.animate('100ms ease-out')),
            ])
        ]
    })
], ModalComponent);
exports.ModalComponent = ModalComponent;
