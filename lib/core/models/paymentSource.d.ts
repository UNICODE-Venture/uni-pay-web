import { UniPayOption } from "../enums";
interface IPaymentSource {
    type: string;
    paymentType: UniPayOption;
    name: string;
    cardNumber: string;
    message: string;
    gatewayId: string;
    referenceNumber: string;
}
declare class PaymentSource implements IPaymentSource {
    type: string;
    paymentType: UniPayOption;
    name: string;
    cardNumber: string;
    message: string;
    gatewayId: string;
    referenceNumber: string;
    constructor({ type, paymentType, name, cardNumber, message, gatewayId, referenceNumber, }: IPaymentSource);
    /** From Res To Model */
    static fromJson(res: any): PaymentSource;
    /** Model To Json */
    toJson(): {
        type: string;
        paymentType: UniPayOption;
        name: string;
        cardNumber: string;
        message: string;
        gatewayId: string;
        referenceNumber: string;
    };
}
export default PaymentSource;
