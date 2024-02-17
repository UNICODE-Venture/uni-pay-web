import PaymentTransactionModel from "../models/paymentTransaction";
import PaymentResModel from "../models/paymentRes";
import UniPayConfig from "../models/uniConfig";
import "../extension/types";
declare class UniPay {
    /** Initiate the payment */
    static __initiateUniPayment({ uniPayConfig, }: {
        uniPayConfig: UniPayConfig;
    }): Promise<Window | null>;
    /** Verify payment is made from the callback url */
    static __verifyPaymentTransaction({ uniPayConfig, urlSearchParams, }: {
        uniPayConfig: UniPayConfig;
        urlSearchParams?: URLSearchParams;
    }): Promise<PaymentTransactionModel>;
    /** Cross-verify the transaction from the gateway */
    static __getTransactionInformation({ uniPayConfig, paymentRes, }: {
        uniPayConfig: UniPayConfig;
        paymentRes: PaymentResModel;
    }): Promise<PaymentTransactionModel>;
}
export default UniPay;
