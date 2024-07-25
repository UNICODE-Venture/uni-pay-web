"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
var UniPayInvoiceDTO = /** @class */ (function () {
    function UniPayInvoiceDTO(_a) {
        var amount = _a.amount, currency = _a.currency, description = _a.description, expiredAt = _a.expiredAt, successUrl = _a.successUrl, backUrl = _a.backUrl, metadata = _a.metadata, callbackUrl = _a.callbackUrl;
        this.amount = amount;
        this.currency = currency;
        this.description = description;
        this.expiredAt = expiredAt;
        this.successUrl = successUrl;
        this.backUrl = backUrl;
        this.metadata = metadata;
        this.callbackUrl = callbackUrl;
    }
    /** [toJson] is to convert class into the json */
    UniPayInvoiceDTO.prototype.toJson = function (locale) {
        return __assign(__assign(__assign(__assign(__assign({ amount: this.amount, currency: this.currency, description: this.description, language: locale !== null && locale !== void 0 ? locale : enums_1.UniPayLocale.en }, (this.expiredAt && { expired_at: this.expiredAt })), (this.successUrl && { success_url: this.successUrl })), (this.backUrl && { back_url: this.backUrl })), (this.metadata && { metadata: this.metadata })), (this.callbackUrl && { callback_url: this.callbackUrl }));
    };
    return UniPayInvoiceDTO;
}());
exports.default = UniPayInvoiceDTO;
