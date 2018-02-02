"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TabsComponent = (function () {
    /* Is component enabled */
    //public isEnabled: boolean;
    /**
     * Constructor
     * @param {TabsService} tabsService
     */
    function TabsComponent(tabsService) {
        this.tabsService = tabsService;
        /* Tabs id */
        this.id = '';
        /* Array of containing tabs */
        this.tabs = [];
        //this.isEnabled = true;
    }
    /**
     * Component initialization
     */
    TabsComponent.prototype.ngOnInit = function () {
        //this.isEnabled = this.tabsService.register(this);
    };
    ;
    TabsComponent.prototype.ngOnDestroy = function () {
        //this.isEnabled = false;
    };
    ;
    /**
     * Register new tab
     * @param {TabComponent} tab
     */
    TabsComponent.prototype.registerTab = function (tab) {
        var findTabById = function (item) { return item.id === tab.id; };
        var foundedTab = this.tabs.find(findTabById);
        if (foundedTab) {
            console.error('angular-transistor: tab with id \'' + tab.id + '\' already exists');
            return false;
        }
        else {
            this.tabs.push(tab);
            var firstEnabledTab = function (item) { return !item.disabled; };
            var foundedFirstEnabledTab = this.tabs.find(firstEnabledTab);
            if (foundedFirstEnabledTab) {
                foundedFirstEnabledTab.select();
            }
            return true;
        }
    };
    ;
    /**
     * Returns tab with specified id otherwise null
     * @param {string} tabId
     * @returns {TabComponent | null}
     */
    TabsComponent.prototype.tab = function (tabId) {
        var findTabById = function (tab) { return tab.id === tabId; };
        var result = this.tabs.find(findTabById);
        return result ? result : null;
    };
    ;
    return TabsComponent;
}());
__decorate([
    core_1.Input()
], TabsComponent.prototype, "id", void 0);
TabsComponent = __decorate([
    core_1.Component({
        selector: 'tabs',
        templateUrl: './tabs.component.html',
        //styleUrls: ['./tabs.component.css']
        styles: [require('./tabs.component.css').toString()]
    })
], TabsComponent);
exports.TabsComponent = TabsComponent;
