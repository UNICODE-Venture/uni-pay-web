import PaymentTransactionModel from "../models/paymentTransaction";
import UniPayConfig from "../models/uniConfig";
import UniPayInvoiceDTO from "../models/uniPayDto";
export default class UniPayController {
    /** Cross-verify the transaction from the gateway */
    static getTransactionInformation({ uniPayConfig, transactionId, }: {
        uniPayConfig: UniPayConfig;
        transactionId: string;
    }): Promise<PaymentTransactionModel>;
    /** Intiate the payment */
    static initiatePaymentByInvoice({ config, paymentData, }: {
        config: UniPayConfig;
        paymentData: UniPayInvoiceDTO;
    }): Promise<import("../models/invoiceModel").default>;
    /** Verify payment is made from the callback url, you can pass `urlSearchParams`
     *  or it will take the query params from the current url
     */
    static verifyPaymentByQueryParams({ config, urlSearchParams, }: {
        config: UniPayConfig;
        urlSearchParams?: URLSearchParams;
    }): Promise<PaymentTransactionModel>;
}
