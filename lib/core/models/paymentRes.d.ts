interface IPaymentResModel {
    transactionId: string;
    isSuccess: boolean;
    message: string;
    amount: number;
}
export default class PaymentResModel implements IPaymentResModel {
    transactionId: string;
    isSuccess: boolean;
    message: string;
    amount: number;
    constructor({ transactionId, isSuccess, message, amount }: IPaymentResModel);
    /** Model to Json */
    toJson(): {
        transactionId: string;
        isSuccess: boolean;
        message: string;
        amount: number;
    };
}
export {};
