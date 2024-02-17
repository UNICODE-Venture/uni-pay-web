"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
var logServices_1 = require("../services/logServices");
require("../extension/types");
/**
 *  @psKey Publishable secret key from the [Moyasar]
 *  @sKey Secret key from the [Moyasar]
 *  @environment The environment to use `[UniPayEnv.production, UniPayEnv.staging]`
 *  @redirectUrl The `redirect url` after the payment is done
 *  @totalAmountWithVat The `total amount` with Tax of `15%` and not less than 2 `SAR`
 *  @description Description for the transaction must be in English
 *  @locale Locale of payment to show the cusmozied UI default is `[PaymentLocale.ar]`
 *  */
var UniPayConfig = /** @class */ (function () {
    function UniPayConfig(_a) {
        var pKey = _a.psKey, sKey = _a.sKey, environment = _a.environment, redirectUrl = _a.redirectUrl, totalAmountWithVat = _a.totalAmountWithVat, businessName = _a.businessName, description = _a.description, _b = _a.locale, locale = _b === void 0 ? enums_1.UniPayLocale.ar : _b;
        this.psKey = pKey;
        this.sKey = sKey;
        this.environment = environment;
        this.redirectUrl = redirectUrl;
        this.totalAmountWithVat = totalAmountWithVat;
        this.businessName = businessName;
        this.description = description || businessName;
        this.locale = locale;
    }
    Object.defineProperty(UniPayConfig.prototype, "paymentSandBoxUrl", {
        /** Get the payment url */
        get: function () {
            return "https://unicode-moyasar.web.app/?purchaseAmount";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UniPayConfig.prototype, "getPaymentGatewayUrl", {
        /** Generate url based on the uni-config */
        get: function () {
            var keyEncoded = this.psKey.toBase64();
            var amount = this.totalAmountWithVat.formatNumToString();
            return "".concat(this.paymentSandBoxUrl, "=").concat(amount, "&appName=").concat(this.description, "&pSk=").concat(keyEncoded, "&locale=").concat(this.locale, "&paymentOptions=0,1&callBackUrl=").concat(this.redirectUrl, "/");
        },
        enumerable: false,
        configurable: true
    });
    /** Get Transaction details End point */
    UniPayConfig.prototype.fetchTransactionDetailsUrl = function (paymentRes) {
        return "https://api.moyasar.com/v1/payments/".concat(paymentRes.transactionId);
    };
    Object.defineProperty(UniPayConfig.prototype, "authorizationKey", {
        /** Get Header Authorization Secret Key */
        get: function () {
            var authKey = "Basic ".concat("".concat(this.sKey, ":").toBase64());
            return authKey;
        },
        enumerable: false,
        configurable: true
    });
    /** log info to console based on the env */
    UniPayConfig.prototype.logInfo = function (message, logType) {
        if (logType === void 0) { logType = enums_1.LogType.default; }
        if (this.environment.isEqualTo(enums_1.UniPayEnv.staging)) {
            switch (logType) {
                case enums_1.LogType.success:
                    return logServices_1.default.success(message);
                case enums_1.LogType.error:
                    return logServices_1.default.error(message);
                case enums_1.LogType.warning:
                    return logServices_1.default.warning(message);
                default:
                    return logServices_1.default.default(message);
            }
        }
        return;
    };
    return UniPayConfig;
}());
exports.default = UniPayConfig;
