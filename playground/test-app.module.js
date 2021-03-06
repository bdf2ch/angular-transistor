"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var angular_transistor_module_1 = require("../src/angular-transistor.module");
var test_app_component_1 = require("./test-app.component");
var TestAppModule = (function () {
    function TestAppModule() {
    }
    return TestAppModule;
}());
TestAppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            angular_transistor_module_1.AngularTransistorModule
        ],
        declarations: [
            test_app_component_1.TestAppComponent,
        ],
        bootstrap: [
            test_app_component_1.TestAppComponent
        ]
    })
], TestAppModule);
exports.TestAppModule = TestAppModule;
//# sourceMappingURL=test-app.module.js.map