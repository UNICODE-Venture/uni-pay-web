"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /** Open tab */
    Utils.openTab = function (url) {
        return window.open(url, "_self");
    };
    return Utils;
}());
exports.default = Utils;
