"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UniPayInvoiceModel = /** @class */ (function () {
    function UniPayInvoiceModel(_a) {
        var id = _a.id, status = _a.status, amount = _a.amount, currency = _a.currency, description = _a.description, logoUrl = _a.logoUrl, amountFormat = _a.amountFormat, url = _a.url, callbackUrl = _a.callbackUrl, expiredAt = _a.expiredAt, createdAt = _a.createdAt, updatedAt = _a.updatedAt, backUrl = _a.backUrl, successUrl = _a.successUrl, metadata = _a.metadata, errorMessage = _a.errorMessage, error = _a.error;
        this.id = id !== null && id !== void 0 ? id : "";
        this.status = status !== null && status !== void 0 ? status : "";
        this.amount = amount !== null && amount !== void 0 ? amount : -1;
        this.currency = currency !== null && currency !== void 0 ? currency : "";
        this.description = description !== null && description !== void 0 ? description : "";
        this.logoUrl = logoUrl !== null && logoUrl !== void 0 ? logoUrl : "";
        this.amountFormat = amountFormat !== null && amountFormat !== void 0 ? amountFormat : "";
        this.url = url !== null && url !== void 0 ? url : "";
        this.callbackUrl = callbackUrl !== null && callbackUrl !== void 0 ? callbackUrl : "";
        this.expiredAt = expiredAt !== null && expiredAt !== void 0 ? expiredAt : "";
        this.createdAt = createdAt !== null && createdAt !== void 0 ? createdAt : "";
        this.updatedAt = updatedAt !== null && updatedAt !== void 0 ? updatedAt : "";
        this.backUrl = backUrl !== null && backUrl !== void 0 ? backUrl : "";
        this.successUrl = successUrl !== null && successUrl !== void 0 ? successUrl : "";
        this.metadata = metadata !== null && metadata !== void 0 ? metadata : {};
        this.errorMessage = errorMessage;
        this.error = error;
    }
    /** [fromJson] is to conver object to class */
    UniPayInvoiceModel.fromJson = function (json) {
        return new UniPayInvoiceModel({
            id: json["id"],
            status: json["status"],
            amount: json["amount"],
            currency: json["currency"],
            description: json["description"],
            logoUrl: json["logo_url"],
            amountFormat: json["amount_format"],
            url: json["url"],
            callbackUrl: json["callback_url"],
            expiredAt: json["expired_at"],
            createdAt: json["created_at"],
            updatedAt: json["updated_at"],
            backUrl: json["back_url"],
            successUrl: json["success_url"],
            metadata: json["metadata"],
        });
    };
    Object.defineProperty(UniPayInvoiceModel.prototype, "isInvoiceCreated", {
        /** To make sure the invoice is created */
        get: function () {
            return this.id !== "" && this.url !== "";
        },
        enumerable: false,
        configurable: true
    });
    return UniPayInvoiceModel;
}());
exports.default = UniPayInvoiceModel;
