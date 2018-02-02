"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TabComponent = (function () {
    /**
     * Component constructor.
     * @param {TabsComponent} parent
     */
    function TabComponent(parent) {
        this.parent = parent;
        /* Tab select event */
        this.onSelect = new core_1.EventEmitter();
        /* Tab deselect event */
        this.onDeselect = new core_1.EventEmitter();
        /* Tab enable event */
        this.onEnable = new core_1.EventEmitter();
        /* Tab disable event */
        this.onDisable = new core_1.EventEmitter();
        if (!this.parent) {
            console.error('angular-transistor: \'tab\' component must be used only inside parent \'tabs\' component');
            return;
        }
        this.id = null;
        this.width = 0;
        this.disabled = false;
        this.isSelected = false;
    }
    ;
    /**
     * Tab component initialization.
     * Registering tab on parent tabs component.
     */
    TabComponent.prototype.ngOnInit = function () {
        if (!this.id) {
            console.error('angular-transistor: tab \'id\' input parameter must be specified');
        }
        if (this.parent && this.id) {
            this.parent.registerTab(this);
        }
    };
    ;
    /**
     * Marks tab as selected and emits onSelect event.
     */
    TabComponent.prototype.select = function () {
        var _this = this;
        if (!this.disabled) {
            this.isSelected = true;
            this.onSelect.emit();
            this.parent.tabs.forEach(function (item) {
                if (item.id !== _this.id) {
                    item.deselect();
                }
            });
        }
    };
    ;
    /**
     * Marks tab as not selected and emits onDeselect event.
     */
    TabComponent.prototype.deselect = function () {
        this.isSelected = false;
        this.onDeselect.emit();
    };
    ;
    /**
     * Marks tab as enabled and emits onEnable event.
     */
    TabComponent.prototype.enable = function () {
        this.disabled = false;
        this.onEnable.emit();
    };
    ;
    /**
     * Marks tab as disabled and emits onDisable event.
     * Selects first tab that is not disabled.
     */
    TabComponent.prototype.disable = function () {
        this.disabled = true;
        this.onDisable.emit();
        var firstEnabledTab = function (item) { return !item.disabled; };
        var foundedFirstEnabledTab = this.parent.tabs.find(firstEnabledTab);
        if (foundedFirstEnabledTab) {
            foundedFirstEnabledTab.select();
        }
    };
    ;
    return TabComponent;
}());
__decorate([
    core_1.Input()
], TabComponent.prototype, "id", void 0);
__decorate([
    core_1.Input()
], TabComponent.prototype, "caption", void 0);
__decorate([
    core_1.Input()
], TabComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input()
], TabComponent.prototype, "title", void 0);
__decorate([
    core_1.Input()
], TabComponent.prototype, "width", void 0);
__decorate([
    core_1.Input()
], TabComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Output()
], TabComponent.prototype, "onSelect", void 0);
__decorate([
    core_1.Output()
], TabComponent.prototype, "onDeselect", void 0);
__decorate([
    core_1.Output()
], TabComponent.prototype, "onEnable", void 0);
__decorate([
    core_1.Output()
], TabComponent.prototype, "onDisable", void 0);
TabComponent = __decorate([
    core_1.Component({
        selector: 'tab',
        templateUrl: './tab.component.html'
    }),
    __param(0, core_1.Optional()), __param(0, core_1.Host())
], TabComponent);
exports.TabComponent = TabComponent;
