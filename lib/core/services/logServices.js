"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogServices = /** @class */ (function () {
    function LogServices() {
    }
    /** Success message to console */
    LogServices.success = function (msg) {
        console.log("%c ".concat(msg), "color: green");
    };
    /** Error message to console */
    LogServices.error = function (msg) {
        console.log("%c ".concat(msg), "color: red");
    };
    /** Warning message to console */
    LogServices.warning = function (msg) {
        console.log("%c ".concat(msg), "color: black; background: yellow");
    };
    /** Default message to console */
    LogServices.default = function (msg) {
        console.log(msg);
    };
    return LogServices;
}());
exports.default = LogServices;
