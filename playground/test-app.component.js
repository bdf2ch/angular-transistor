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
var tabs_service_1 = require("../src/tabs/tabs.service");
var modals_service_1 = require("../src/modals/modals.service");
var TestAppComponent = (function () {
    function TestAppComponent(tabs, modals) {
        this.tabs = tabs;
        this.modals = modals;
        this.trigger = false;
    }
    ;
    TestAppComponent.prototype.selectFirstTab = function () {
        this.tabs.get('lol').tab('test1').select();
    };
    ;
    TestAppComponent.prototype.selectThirdTab = function () {
        this.tabs.get('lol').tab('test3').select();
    };
    ;
    TestAppComponent.prototype.disableFirstTab = function () {
        this.tabs.get('lol').tab('test1').disable();
    };
    ;
    TestAppComponent.prototype.enableFirstTab = function () {
        this.tabs.get('lol').tab('test1').enable();
    };
    ;
    TestAppComponent.prototype.openModal = function () {
        this.modals.get('test-modal').open();
    };
    ;
    TestAppComponent.prototype.closeModal = function () {
        this.modals.get('test-modal').close();
    };
    ;
    TestAppComponent.prototype.openSecondModal = function () {
        this.modals.get('second-test-modal').open();
    };
    ;
    TestAppComponent.prototype.closeSecondModal = function () {
        this.modals.get('second-test-modal').close();
    };
    ;
    TestAppComponent.prototype.switchTrigger = function () {
        this.trigger = !this.trigger;
    };
    ;
    TestAppComponent.prototype.openTriggerModal = function () {
        this.modals.get('trigger-modal').open();
    };
    ;
    return TestAppComponent;
}());
TestAppComponent = __decorate([
    core_1.Component({
        selector: 'test-app',
        templateUrl: './test-app.component.html'
    }),
    __metadata("design:paramtypes", [tabs_service_1.TabsService,
        modals_service_1.ModalsService])
], TestAppComponent);
exports.TestAppComponent = TestAppComponent;
//# sourceMappingURL=test-app.component.js.map