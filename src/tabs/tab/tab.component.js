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
var tabs_component_1 = require("../tabs.component");
var TabComponent = (function () {
    /**
     * Component constructor.
     * @param {TabsComponent} parent
     */
    function TabComponent(parent) {
        this.parent = parent;
        if (!this.parent) {
            console.error('angular-transistor: \'tab\' component must be used only inside \'tabs\' component');
            return;
        }
        this.width = 0;
        this.isSelected = false;
    }
    ;
    /**
     * Tab component initialization.
     * Registering tab on parent tabs component.
     */
    TabComponent.prototype.ngOnInit = function () {
        if (this.parent) {
            this.parent.registerTab(this);
        }
    };
    ;
    /**
     * Mark tab as selected.
     */
    TabComponent.prototype.select = function () {
        this.isSelected = true;
    };
    ;
    /**
     * Mark tab as not selected.
     */
    TabComponent.prototype.deselect = function () {
        this.isSelected = false;
    };
    ;
    return TabComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TabComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TabComponent.prototype, "caption", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TabComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TabComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TabComponent.prototype, "width", void 0);
TabComponent = __decorate([
    core_1.Component({
        selector: 'tab',
        templateUrl: './tab.component.html',
        styleUrls: ['./tab.component.css']
    }),
    __param(0, core_1.Optional()), __param(0, core_1.Host()),
    __metadata("design:paramtypes", [tabs_component_1.TabsComponent])
], TabComponent);
exports.TabComponent = TabComponent;
//# sourceMappingURL=tab.component.js.map