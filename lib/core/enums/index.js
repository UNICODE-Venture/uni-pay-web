"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentEnumsHelper = exports.LogType = exports.UniPayLocale = exports.UniPayEnv = exports.UniPayOption = exports.UniPayStatus = void 0;
/** Payement Status */
var UniPayStatus;
(function (UniPayStatus) {
    UniPayStatus["success"] = "success";
    UniPayStatus["failed"] = "failed";
    UniPayStatus["notSpecified"] = "notSpecified";
})(UniPayStatus || (exports.UniPayStatus = UniPayStatus = {}));
/** Local Saudi Online Payment System `[Mada, Visa, MasterCard, ApplePay, stcpay]` */
var UniPayOption;
(function (UniPayOption) {
    UniPayOption["mada"] = "mada";
    UniPayOption["visa"] = "visa";
    UniPayOption["mastercard"] = "mastercard";
    UniPayOption["applepay"] = "applepay";
    UniPayOption["stcpay"] = "stcpay";
    UniPayOption["notSpecified"] = "notSpecified";
})(UniPayOption || (exports.UniPayOption = UniPayOption = {}));
/** Uni Pay Env */
var UniPayEnv;
(function (UniPayEnv) {
    UniPayEnv["production"] = "production";
    UniPayEnv["staging"] = "staging";
})(UniPayEnv || (exports.UniPayEnv = UniPayEnv = {}));
/** Locale of Payment */
var UniPayLocale;
(function (UniPayLocale) {
    UniPayLocale[UniPayLocale["ar"] = 0] = "ar";
    UniPayLocale[UniPayLocale["en"] = 1] = "en";
})(UniPayLocale || (exports.UniPayLocale = UniPayLocale = {}));
/** Types of Logs */
var LogType;
(function (LogType) {
    LogType[LogType["success"] = 0] = "success";
    LogType[LogType["error"] = 1] = "error";
    LogType[LogType["warning"] = 2] = "warning";
    LogType[LogType["default"] = 3] = "default";
})(LogType || (exports.LogType = LogType = {}));
var PaymentEnumsHelper = /** @class */ (function () {
    function PaymentEnumsHelper() {
    }
    /** Get the type of Payment options used */
    PaymentEnumsHelper.getPaymentOptionType = function (type) {
        if (type === void 0) { type = UniPayOption.notSpecified; }
        switch (type) {
            case "mada":
                return UniPayOption.mada;
            case "visa":
                return UniPayOption.visa;
            case "mastercard":
                return UniPayOption.mastercard;
            case "applepay":
                return UniPayOption.applepay;
            case "stcpay":
                return UniPayOption.stcpay;
            default:
                return UniPayOption.notSpecified;
        }
    };
    return PaymentEnumsHelper;
}());
exports.PaymentEnumsHelper = PaymentEnumsHelper;
