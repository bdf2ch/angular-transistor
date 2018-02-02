"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TabsService = (function () {
    function TabsService() {
        /* Array containing all registered tabs components */
        this.tabs = [];
    }
    /**
     * Registering TabsComponent
     * @param {TabsComponent} tabs
     */
    TabsService.prototype.register = function (tabs) {
        var findTabsById = function (item) { return item.id === tabs.id; };
        var result = this.tabs.find(findTabsById);
        //if (result && result.isEnabled) {
        //    console.error('angular-transistor: tabs plugin with id \'' + tabs.id + '\' already exists');
        //    return false;
        //} else if (result && !result.isEnabled) {
        //    result.isEnabled = true;
        //    return true;
        //} else {
        this.tabs.push(tabs);
        return true;
        //}
    };
    ;
    /**
     * Getting tabs component by its id
     * @param {string} id
     * @returns {TabsComponent}
     */
    TabsService.prototype.get = function (id) {
        var findTabById = function (tabs) { return tabs.id === id; };
        var tabs = this.tabs.find(findTabById);
        return tabs ? tabs : null;
    };
    ;
    return TabsService;
}());
TabsService = __decorate([
    core_1.Injectable()
], TabsService);
exports.TabsService = TabsService;
