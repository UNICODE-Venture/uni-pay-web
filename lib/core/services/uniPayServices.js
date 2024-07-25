"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var uniConfig_1 = require("../models/uniConfig");
require("../extension/types");
var uniPayController_1 = require("../controllers/uniPayController");
var utils_1 = require("../utils");
var invoice_1 = require("../controllers/invoice");
var UniPay = /** @class */ (function () {
    function UniPay() {
    }
    /** @deprecated
     * - Use `UniPay.makePayment` instead to
     *  make the payment */
    UniPay.initiateUniPayment = function (_a) {
        var uniPayConfig = _a.uniPayConfig;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, utils_1.default.openTab(uniPayConfig.getPaymentGatewayUrl)];
            });
        });
    };
    /** Make payment using the invoice features
     * provided by Moyasar payment gateway
     * pass the required parameters to make the payment
     * @param {} - pass the required parameters to make the payment
     * @returns This will open a self tab to make the payment
     */
    UniPay.makePayment = function (_a) {
        var config = _a.config, paymentData = _a.paymentData;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, uniPayController_1.default.initiatePaymentByInvoice({
                        config: config,
                        paymentData: paymentData,
                    })];
            });
        });
    };
    /** Verify payment is made from the callback url, you can pass `urlSearchParams`
     *  or it will take the query params from the current url
     */
    UniPay.verifyPaymentByQueryParams = function (_a) {
        var config = _a.config, urlSearchParams = _a.urlSearchParams;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, uniPayController_1.default.verifyPaymentByQueryParams({
                        config: config,
                        urlSearchParams: urlSearchParams,
                    })];
            });
        });
    };
    /** Create an invoice to make the payment
     * pass the required parameters to create the invoice
     * @param {} - pass the required parameters to create the invoice
     * @returns {Promise<UniPayInvoiceModel>} - This will return the invoice model
     */
    UniPay.createInvoice = function (_a) {
        var config = _a.config, paymentData = _a.paymentData;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, invoice_1.default.createInvoice({
                        config: config,
                        paymentData: paymentData,
                    })];
            });
        });
    };
    /**
     * Get the payment transaction information by passing the transaction id
     * @param {} - pass the required parameters to get the transaction information
     * @returns {Promise<PaymentTransactionModel>} - This will return the payment transaction model
     */
    UniPay.getPaymentTransactionById = function (_a) {
        var config = _a.config, transactionId = _a.transactionId;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, uniPayController_1.default.getTransactionInformation({
                        uniPayConfig: config,
                        transactionId: transactionId,
                    })];
            });
        });
    };
    UniPay.prototype.test = function () {
        UniPay.getPaymentTransactionById({
            config: new uniConfig_1.default({
                psKey: "pk_test_key",
                sKey: "sk_test_key",
            }),
            transactionId: "abc12345",
        });
    };
    return UniPay;
}());
exports.default = UniPay;
