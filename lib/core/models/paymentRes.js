"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaymentResModel = /** @class */ (function () {
    function PaymentResModel(_a) {
        var transactionId = _a.transactionId, isSuccess = _a.isSuccess, message = _a.message, amount = _a.amount;
        this.transactionId = transactionId;
        this.isSuccess = isSuccess;
        this.message = message;
        this.amount = amount;
    }
    /** Model to Json */
    PaymentResModel.prototype.toJson = function () {
        return {
            transactionId: this.transactionId,
            isSuccess: this.isSuccess,
            message: this.message,
            amount: this.amount,
        };
    };
    return PaymentResModel;
}());
exports.default = PaymentResModel;
