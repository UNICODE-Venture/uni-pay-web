import { UniPayCurrency, UniPayOption, UniPayStatus } from "../enums";
import PaymentSource from "./paymentSource";
interface IPaymentTransactionModel {
    transactionId: string;
    paymentStatus: UniPayStatus;
    amount: number;
    fee: number;
    currency: UniPayCurrency;
    description: string;
    amountFormatted: string;
    ip: string;
    createdAt: Date;
    invoiceId: string;
    source: PaymentSource;
}
declare class PaymentTransactionModel implements IPaymentTransactionModel {
    transactionId: string;
    paymentStatus: UniPayStatus;
    amount: number;
    fee: number;
    currency: UniPayCurrency;
    description: string;
    amountFormatted: string;
    ip: string;
    createdAt: Date;
    invoiceId: string;
    source: PaymentSource;
    constructor({ transactionId, paymentStatus, amount, fee, currency, description, amountFormatted, ip, createdAt, invoiceId, source, }: IPaymentTransactionModel);
    /** From Res To Model */
    static fromJson(res: any, transactionId: string): PaymentTransactionModel;
    /** Model To Json */
    toJson(): {
        transactionId: string;
        paymentStatus: UniPayStatus;
        amount: number;
        fee: number;
        currency: UniPayCurrency;
        description: string;
        amountFormatted: string;
        ip: string;
        createdAt: Date;
        invoiceId: string;
        paymentSource: {
            type: string;
            paymentType: UniPayOption;
            name: string;
            cardNumber: string;
            message: string;
            gatewayId: string;
            referenceNumber: string;
        };
    };
    /** Is Payment Successfull */
    get isPaymentSuccessfull(): boolean;
    /** Get the payment type used in the transaction
     * @returns {UniPayOption} - The payment type used in the transaction
     */
    get paymentType(): UniPayOption;
    /** Is used `Apple Pay` */
    isApplePay(): boolean;
    /** Empty model instance */
    static emptyInstance(): PaymentTransactionModel;
}
export default PaymentTransactionModel;
