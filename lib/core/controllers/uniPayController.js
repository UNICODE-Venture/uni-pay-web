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
var apis_1 = require("../config/apis");
var axiosClient_1 = require("../config/axiosClient");
var enums_1 = require("../enums");
var paymentRes_1 = require("../models/paymentRes");
var paymentTransaction_1 = require("../models/paymentTransaction");
var utils_1 = require("../utils");
var invoice_1 = require("./invoice");
var UniPayController = /** @class */ (function () {
    function UniPayController() {
    }
    /** Cross-verify the transaction from the gateway */
    UniPayController.getTransactionInformation = function (_a) {
        var uniPayConfig = _a.uniPayConfig, transactionId = _a.transactionId;
        return __awaiter(this, void 0, void 0, function () {
            var payment, gatewayRes, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        payment = paymentTransaction_1.default.emptyInstance();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axiosClient_1.default.get(apis_1.default.payments(transactionId), {
                                headers: { Authorization: uniPayConfig.authorizationKey },
                            })];
                    case 2:
                        gatewayRes = _b.sent();
                        uniPayConfig.logInfo("GR => ".concat(gatewayRes.data), enums_1.LogType.warning);
                        payment = paymentTransaction_1.default.fromJson(gatewayRes.data, transactionId);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        uniPayConfig.logInfo("Error => ".concat(e_1), enums_1.LogType.error);
                        payment.source.message = e_1.message || JSON.stringify(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, payment];
                }
            });
        });
    };
    /** Intiate the payment */
    UniPayController.initiatePaymentByInvoice = function (_a) {
        var config = _a.config, paymentData = _a.paymentData;
        return __awaiter(this, void 0, void 0, function () {
            var invoice;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, invoice_1.default.createInvoice({
                            config: config,
                            paymentData: paymentData,
                        })];
                    case 1:
                        invoice = _b.sent();
                        if (invoice.isInvoiceCreated) {
                            utils_1.default.openTab(invoice.url);
                        }
                        return [2 /*return*/, invoice];
                }
            });
        });
    };
    /** Verify payment is made from the callback url, you can pass `urlSearchParams`
     *  or it will take the query params from the current url
     */
    UniPayController.verifyPaymentByQueryParams = function (_a) {
        var config = _a.config, urlSearchParams = _a.urlSearchParams;
        return __awaiter(this, void 0, void 0, function () {
            var paymentTransaction, callBackParams, _b, id, status, amount, message, paymentRes;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        paymentTransaction = paymentTransaction_1.default.emptyInstance();
                        callBackParams = urlSearchParams !== null && urlSearchParams !== void 0 ? urlSearchParams : new URLSearchParams(window.location.search);
                        _b = Object.fromEntries(callBackParams), id = _b.id, status = _b.status, amount = _b.amount, message = _b.message;
                        paymentRes = new paymentRes_1.default({
                            transactionId: id !== null && id !== void 0 ? id : "",
                            isSuccess: (status === null || status === void 0 ? void 0 : status.isEqualTo("paid")) && id !== undefined,
                            message: message !== null && message !== void 0 ? message : "",
                            amount: Number.parseFloat(amount !== null && amount !== void 0 ? amount : "0") / 100,
                        });
                        config.logInfo("PC => ".concat(paymentRes.toJson()), enums_1.LogType.success);
                        if (!(paymentRes.isSuccess && id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, UniPayController.getTransactionInformation({
                                uniPayConfig: config,
                                transactionId: paymentRes.transactionId,
                            })];
                    case 1:
                        paymentTransaction = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        paymentTransaction.source.message = message;
                        _c.label = 3;
                    case 3:
                        config.logInfo("PT => ".concat(paymentTransaction.toJson()));
                        return [2 /*return*/, paymentTransaction];
                }
            });
        });
    };
    return UniPayController;
}());
exports.default = UniPayController;
