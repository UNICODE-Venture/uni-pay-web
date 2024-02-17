import { UniPayOption, UniPayStatus } from "../enums";
import PaymentResModel from "./paymentRes";
import PaymentSource from "./paymentSource";
interface IPaymentTransactionModel {
    transactionId: string;
    paymentStatus: UniPayStatus;
    amount: number;
    fee: number;
    currency: string;
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
    currency: string;
    description: string;
    amountFormatted: string;
    ip: string;
    createdAt: Date;
    invoiceId: string;
    source: PaymentSource;
    constructor({ transactionId, paymentStatus, amount, fee, currency, description, amountFormatted, ip, createdAt, invoiceId, source, }: IPaymentTransactionModel);
    /** From Res To Model */
    static fromJson(res: any, paymenrRes: PaymentResModel): PaymentTransactionModel;
    /** Model To Json */
    toJson(): {
        transactionId: string;
        paymentStatus: UniPayStatus;
        amount: number;
        fee: number;
        currency: string;
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
    /** Is used `Apple Pay` */
    isApplePay(): boolean;
    /** Empty model instance */
    static emptyInstance(): PaymentTransactionModel;
}
export default PaymentTransactionModel;
