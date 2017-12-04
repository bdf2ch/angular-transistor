"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TabPlugin = (function () {
    function TabPlugin(config) {
        if (config) {
            this.id = config.id;
            this.caption = config.caption;
        }
        this.isActive = false;
    }
    ;
    return TabPlugin;
}());
exports.TabPlugin = TabPlugin;
//# sourceMappingURL=tab.model.js.map