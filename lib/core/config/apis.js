"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Apis = /** @class */ (function () {
    function Apis() {
    }
    /** payments [end-point] */
    Apis.payments = function (id) {
        return "/payments/".concat(id);
    };
    /** Base URL */
    Apis.moyasarUrl = "https://api.moyasar.com/v1";
    /** invoices [end-point] */
    Apis.invoices = "/invoices";
    return Apis;
}());
exports.default = Apis;
