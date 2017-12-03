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
var animations_1 = require("@angular/animations");
var modals_service_1 = require("./modals.service");
var angular_transistor_config_1 = require("../angular-transistor.config");
var modal_footer_component_1 = require("./modal-footer/modal-footer.component");
var modal_content_component_1 = require("./modal-content/modal-content.component");
var ModalComponent = (function () {
    /**
     * Constructor
     * @param {ModalsService} modals
     */
    function ModalComponent(modals, renderer, detector) {
        this.modals = modals;
        this.renderer = renderer;
        this.detector = detector;
        /**/
        this.onClose = new core_1.EventEmitter();
        this.config = angular_transistor_config_1.angularTransistorConfig;
        this.width = angular_transistor_config_1.angularTransistorConfig.modalDefaultWidht;
        //this.height = 0;
        this.modalHeight = 0;
        this.depth = angular_transistor_config_1.angularTransistorConfig.modalDefaultDepth;
        this.header = true;
        this.icon = null;
        this.contentHeight = 0;
        this.footerHeight = 0;
        this.isOpened = false;
        this.status = 'hidden';
    }
    ;
    ModalComponent.prototype.ngOnInit = function () {
        this.modals.register(this);
    };
    ;
    ModalComponent.prototype.ngAfterContentChecked = function () {
        if (this.modal) {
            if (this.content) {
                var contentHeight = this.content.element.nativeElement.children[0].clientHeight;
                this.renderer.setStyle(this.content.element.nativeElement.children[0], 'top', this.header ? '60px' : '0px');
                if (this.footer) {
                    var footerHeight = this.footer.element.nativeElement.children[0].clientHeight;
                    this.renderer.setStyle(this.content.element.nativeElement.children[0], 'bottom', this.footer.element.nativeElement.children[0].clientHeight + 'px');
                    this.renderer.setStyle(this.modal.element.nativeElement, 'height', this.header ? 60 + contentHeight + footerHeight + 'px' : contentHeight + footerHeight + 'px');
                }
                else {
                    this.renderer.setStyle(this.modal.element.nativeElement, 'height', this.header ? 60 + contentHeight + 'px' : contentHeight + 'px');
                }
            }
        }
    };
    ;
    ModalComponent.prototype.open = function () {
        var _this = this;
        this.isOpened = true;
        window.setTimeout(function () {
            _this.detector.detectChanges();
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
    core_1.Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "id", void 0);
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
    __metadata("design:type", Boolean)
], ModalComponent.prototype, "header", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "caption", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "icon", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ModalComponent.prototype, "onClose", void 0);
__decorate([
    core_1.ViewChild('modal', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], ModalComponent.prototype, "modal", void 0);
__decorate([
    core_1.ContentChild(modal_footer_component_1.ModalFooterComponent),
    __metadata("design:type", modal_footer_component_1.ModalFooterComponent)
], ModalComponent.prototype, "footer", void 0);
__decorate([
    core_1.ContentChild(modal_content_component_1.ModalContentComponent),
    __metadata("design:type", modal_content_component_1.ModalContentComponent)
], ModalComponent.prototype, "content", void 0);
ModalComponent = __decorate([
    core_1.Component({
        selector: 'modal',
        templateUrl: './modal.component.html',
        styles: [require('./modal.component.css').toString()],
        changeDetection: core_1.ChangeDetectionStrategy.Default,
        animations: [
            animations_1.trigger("fog", [
                animations_1.state('shown', animations_1.style({
                    background: 'rgba(0, 0, 0, 0.3)'
                })),
                animations_1.state('hidden', animations_1.style({
                    background: 'rgba(0, 0, 0, 0.0)'
                })),
                animations_1.transition('hidden => shown', animations_1.animate("200ms linear")),
                animations_1.transition('shown => hidden', animations_1.animate("200ms linear")),
            ]),
            animations_1.trigger("modal", [
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
    }),
    __metadata("design:paramtypes", [modals_service_1.ModalsService,
        core_1.Renderer2,
        core_1.ChangeDetectorRef])
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map