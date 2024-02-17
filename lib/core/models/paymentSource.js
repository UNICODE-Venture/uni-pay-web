"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
var PaymentSource = /** @class */ (function () {
    function PaymentSource(_a) {
        var type = _a.type, paymentType = _a.paymentType, name = _a.name, cardNumber = _a.cardNumber, message = _a.message, gatewayId = _a.gatewayId, referenceNumber = _a.referenceNumber;
        this.type = type;
        this.paymentType = paymentType;
        this.name = name;
        this.cardNumber = cardNumber;
        this.message = message;
        this.gatewayId = gatewayId;
        this.referenceNumber = referenceNumber;
    }
    /** From Res To Model */
    PaymentSource.fromJson = function (res) {
        var _a, _b, _c, _d, _e, _f;
        return new PaymentSource({
            type: (_a = res.type) !== null && _a !== void 0 ? _a : "",
            paymentType: enums_1.PaymentEnumsHelper.getPaymentOptionType(res.company),
            name: (_b = res.name) !== null && _b !== void 0 ? _b : "",
            cardNumber: (_c = res.number) !== null && _c !== void 0 ? _c : "xxxx-xxxx-xxxx-xxxx",
            message: (_d = res.message) !== null && _d !== void 0 ? _d : "",
            gatewayId: (_e = res.gateway_id) !== null && _e !== void 0 ? _e : "",
            referenceNumber: (_f = res.reference_number) !== null && _f !== void 0 ? _f : "",
        });
    };
    /** Model To Json */
    PaymentSource.prototype.toJson = function () {
        return {
            type: this.type,
            paymentType: this.paymentType,
            name: this.name,
            cardNumber: this.cardNumber,
            message: this.message,
            gatewayId: this.gatewayId,
            referenceNumber: this.referenceNumber,
        };
    };
    return PaymentSource;
}());
exports.default = PaymentSource;
