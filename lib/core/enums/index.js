"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentEnumsHelper = exports.UniPayCurrency = exports.LogType = exports.UniPayLocale = exports.UniPayEnv = exports.UniPayOption = exports.UniPayStatus = void 0;
/** Payement Status */
var UniPayStatus;
(function (UniPayStatus) {
    UniPayStatus["success"] = "success";
    UniPayStatus["failed"] = "failed";
    UniPayStatus["notSpecified"] = "notSpecified";
})(UniPayStatus || (UniPayStatus = {}));
exports.UniPayStatus = UniPayStatus;
var UniPayCurrency;
(function (UniPayCurrency) {
    /** [sar] is the currency for Saudi Riyal. */
    UniPayCurrency["sar"] = "SAR";
    /** [usd] is the currency for United States Dollar. */
    UniPayCurrency["usd"] = "USD";
    /** [omr] is the currency for Omani Riyal. */
    UniPayCurrency["omr"] = "OMR";
})(UniPayCurrency || (UniPayCurrency = {}));
exports.UniPayCurrency = UniPayCurrency;
/** Local Saudi Online Payment System `[Mada, Visa, MasterCard, ApplePay, stcpay]` */
var UniPayOption;
(function (UniPayOption) {
    UniPayOption["mada"] = "mada";
    UniPayOption["visa"] = "visa";
    UniPayOption["mastercard"] = "mastercard";
    UniPayOption["applepay"] = "applepay";
    UniPayOption["stcpay"] = "stcpay";
    UniPayOption["amex"] = "amex";
    UniPayOption["notSpecified"] = "notSpecified";
})(UniPayOption || (UniPayOption = {}));
exports.UniPayOption = UniPayOption;
/** Uni Pay Env */
var UniPayEnv;
(function (UniPayEnv) {
    UniPayEnv["production"] = "production";
    UniPayEnv["staging"] = "staging";
})(UniPayEnv || (UniPayEnv = {}));
exports.UniPayEnv = UniPayEnv;
/** Locale of Payment */
var UniPayLocale;
(function (UniPayLocale) {
    UniPayLocale["ar"] = "ar";
    UniPayLocale["en"] = "en";
})(UniPayLocale || (UniPayLocale = {}));
exports.UniPayLocale = UniPayLocale;
/** Types of Logs */
var LogType;
(function (LogType) {
    LogType[LogType["success"] = 0] = "success";
    LogType[LogType["error"] = 1] = "error";
    LogType[LogType["warning"] = 2] = "warning";
    LogType[LogType["default"] = 3] = "default";
})(LogType || (LogType = {}));
exports.LogType = LogType;
var PaymentEnumsHelper = /** @class */ (function () {
    function PaymentEnumsHelper() {
    }
    /** Get the type of Payment options used */
    PaymentEnumsHelper.getPaymentOptionType = function (type) {
        if (type === void 0) { type = UniPayOption.notSpecified; }
        // MasterCard is also known as master, new changes in the API
        if (type.isEqualTo("master"))
            return UniPayOption.mastercard;
        switch (type) {
            case "mada":
                return UniPayOption.mada;
            case "visa":
                return UniPayOption.visa;
            case "mastercard":
                return UniPayOption.mastercard;
            case "mastercard":
                return UniPayOption.mastercard;
            case "applepay":
                return UniPayOption.applepay;
            case "stcpay":
                return UniPayOption.stcpay;
            case "amex":
                return UniPayOption.amex;
            default:
                return UniPayOption.notSpecified;
        }
    };
    return PaymentEnumsHelper;
}());
exports.PaymentEnumsHelper = PaymentEnumsHelper;
