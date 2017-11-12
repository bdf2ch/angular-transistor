"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var animations_1 = require("@angular/platform-browser/animations");
var tabs_component_1 = require("./tabs/tabs.component");
var tab_component_1 = require("./tabs/tab/tab.component");
var tabs_service_1 = require("./tabs/tabs.service");
var modal_component_1 = require("./modals/modal.component");
var modals_service_1 = require("./modals/modals.service");
require("./assets/styles/angular-transistor.css");
require("font-awesome/css/font-awesome.css");
require("./assets/fonts/OpenSans/OpenSans-Regular.ttf");
var AngularTransistorModule = (function () {
    function AngularTransistorModule() {
    }
    return AngularTransistorModule;
}());
AngularTransistorModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            animations_1.BrowserAnimationsModule
        ],
        declarations: [
            tabs_component_1.TabsComponent,
            tab_component_1.TabComponent,
            modal_component_1.ModalComponent
        ],
        exports: [
            tabs_component_1.TabsComponent,
            tab_component_1.TabComponent,
            modal_component_1.ModalComponent
        ],
        providers: [
            tabs_service_1.TabsService,
            modals_service_1.ModalsService
        ]
    })
], AngularTransistorModule);
exports.AngularTransistorModule = AngularTransistorModule;
//# sourceMappingURL=angular-transistor.module.js.map