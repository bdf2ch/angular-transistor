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
var tabs_service_1 = require("./tabs.service");
var TabsComponent = (function () {
    function TabsComponent(tabsService) {
        this.tabsService = tabsService;
        /* Tabs id */
        this.id = '';
        /* Array of containing tabs */
        this.tabs = [];
    }
    TabsComponent.prototype.ngOnInit = function () {
        this.tabsService.register(this);
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
            console.log(this.tabs);
            this.selectTab(this.tabs[0]);
            return true;
        }
    };
    ;
    /**
     * Select tab
     * @param {TabComponent} tab
     * @returns {TabComponent}
     */
    TabsComponent.prototype.selectTab = function (tab) {
        this.tabs.forEach(function (item) {
            if (item.id === tab.id) {
                tab.select();
                return tab;
            }
            else {
                item.deselect();
            }
        });
        return null;
    };
    ;
    return TabsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TabsComponent.prototype, "id", void 0);
TabsComponent = __decorate([
    core_1.Component({
        selector: 'tabs',
        templateUrl: './tabs.component.html',
        styleUrls: ['./tabs.component.css']
    }),
    __metadata("design:paramtypes", [tabs_service_1.TabsService])
], TabsComponent);
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=tabs.component.js.map