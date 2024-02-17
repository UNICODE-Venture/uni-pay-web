"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
var paymentSource_1 = require("./paymentSource");
var PaymentTransactionModel = /** @class */ (function () {
    function PaymentTransactionModel(_a) {
        var transactionId = _a.transactionId, paymentStatus = _a.paymentStatus, amount = _a.amount, fee = _a.fee, currency = _a.currency, description = _a.description, amountFormatted = _a.amountFormatted, ip = _a.ip, createdAt = _a.createdAt, invoiceId = _a.invoiceId, source = _a.source;
        this.transactionId = transactionId;
        this.paymentStatus = paymentStatus;
        this.amount = amount;
        this.fee = fee;
        this.currency = currency;
        this.description = description;
        this.amountFormatted = amountFormatted;
        this.ip = ip;
        this.createdAt = createdAt;
        this.invoiceId = invoiceId;
        this.source = source;
    }
    /** From Res To Model */
    PaymentTransactionModel.fromJson = function (res, paymenrRes) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return new PaymentTransactionModel({
            transactionId: (_a = res.id) !== null && _a !== void 0 ? _a : paymenrRes.transactionId,
            paymentStatus: res.id && res.status === "paid"
                ? enums_1.UniPayStatus.success
                : enums_1.UniPayStatus.failed,
            amount: ((_b = res.amount) !== null && _b !== void 0 ? _b : 0) / 100,
            fee: ((_c = res.fee) !== null && _c !== void 0 ? _c : 0) / 100,
            currency: (_d = res.currency) !== null && _d !== void 0 ? _d : "SAR",
            description: (_e = res.description) !== null && _e !== void 0 ? _e : "",
            amountFormatted: (_f = res.amountFormatted) !== null && _f !== void 0 ? _f : "0.00 SAR",
            ip: (_g = res.ip) !== null && _g !== void 0 ? _g : "0.0.0.0",
            createdAt: new Date((_h = res.createdAt) !== null && _h !== void 0 ? _h : new Date().toISOString()),
            invoiceId: (_j = res.invoiceId) !== null && _j !== void 0 ? _j : "",
            source: paymentSource_1.default.fromJson(res.source),
        });
    };
    /** Model To Json */
    PaymentTransactionModel.prototype.toJson = function () {
        return {
            transactionId: this.transactionId,
            paymentStatus: this.paymentStatus,
            amount: this.amount,
            fee: this.fee,
            currency: this.currency,
            description: this.description,
            amountFormatted: this.amountFormatted,
            ip: this.ip,
            createdAt: this.createdAt,
            invoiceId: this.invoiceId,
            paymentSource: this.source.toJson(),
        };
    };
    Object.defineProperty(PaymentTransactionModel.prototype, "isPaymentSuccessfull", {
        /** Is Payment Successfull */
        get: function () {
            return (this.paymentStatus === enums_1.UniPayStatus.success && this.transactionId !== "");
        },
        enumerable: false,
        configurable: true
    });
    /** Is used `Apple Pay` */
    PaymentTransactionModel.prototype.isApplePay = function () {
        return this.source.paymentType === enums_1.UniPayOption.applepay;
    };
    /** Empty model instance */
    PaymentTransactionModel.emptyInstance = function () {
        return new PaymentTransactionModel({
            transactionId: "",
            paymentStatus: enums_1.UniPayStatus.failed,
            amount: 0,
            fee: 0,
            currency: "SAR",
            description: "",
            amountFormatted: "0.00 SAR",
            ip: "",
            createdAt: new Date(),
            invoiceId: "",
            source: new paymentSource_1.default({
                type: "",
                paymentType: enums_1.UniPayOption.notSpecified,
                name: "",
                cardNumber: "xxxx-xxxx-xxxx-xxxx",
                message: "Some Error Occured",
                gatewayId: "",
                referenceNumber: "",
            }),
        });
    };
    return PaymentTransactionModel;
}());
exports.default = PaymentTransactionModel;
