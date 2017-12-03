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
var ModalContentComponent = (function () {
    function ModalContentComponent(//@Optional() @Host() private parent: ModalComponent,
        element, detector) {
        this.element = element;
        this.detector = detector;
        //if (!parent) {
        //    console.log('angular-transistor: component \'modal-content\' must be used only inside \'modal\' component');
        //}
        this.height = 0;
    }
    ModalContentComponent.prototype.ngAfterViewInit = function () {
        console.log('content-height afterViewInit', this.element.nativeElement.clientHeight);
    };
    ;
    ModalContentComponent.prototype.ngAfterViewChecked = function () {
        console.log(this.element.nativeElement.children[0]);
        console.log('content-height afterViewChecked', this.element.nativeElement.children[0].clientHeight);
        //if (this.parent) {
        //    this.parent.contentHeight = this.element.nativeElement.children[0].clientHeight;
        //    this.parent.detector.detectChanges();
        //}
        if (this.height === 0) {
            this.height = this.element.nativeElement.children[0].clientHeight;
            //this.parent.detector.detectChanges();
        }
    };
    ;
    return ModalContentComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ModalContentComponent.prototype, "height", void 0);
ModalContentComponent = __decorate([
    core_1.Component({
        selector: 'modal-content',
        templateUrl: './modal-content.component.html',
        styles: [require('./modal-content.component.css').toString()]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.ChangeDetectorRef])
], ModalContentComponent);
exports.ModalContentComponent = ModalContentComponent;
//# sourceMappingURL=modal-content.component.js.map