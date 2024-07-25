import PaymentTransactionModel from "../models/paymentTransaction";
import UniPayConfig from "../models/uniConfig";
import "../extension/types";
import UniPayInvoiceDTO from "../models/uniPayDto";
import UniPayInvoiceModel from "../models/invoiceModel";
interface UniPayProps {
    config: UniPayConfig;
    urlSearchParams?: URLSearchParams;
    paymentData: UniPayInvoiceDTO;
    transactionId?: string;
}
declare class UniPay {
    /** @deprecated
     * - Use `UniPay.makePayment` instead to
     *  make the payment */
    static initiateUniPayment({ uniPayConfig, }: {
        uniPayConfig: UniPayConfig;
    }): Promise<Window | null>;
    /** Make payment using the invoice features
     * provided by Moyasar payment gateway
     * pass the required parameters to make the payment
     * @param {} - pass the required parameters to make the payment
     * @returns This will open a self tab to make the payment
     */
    static makePayment({ config, paymentData }: UniPayProps): Promise<UniPayInvoiceModel>;
    /** Verify payment is made from the callback url, you can pass `urlSearchParams`
     *  or it will take the query params from the current url
     */
    static verifyPaymentByQueryParams({ config, urlSearchParams, }: Partial<UniPayProps> & Required<Pick<UniPayProps, "config">>): Promise<PaymentTransactionModel>;
    /** Create an invoice to make the payment
     * pass the required parameters to create the invoice
     * @param {} - pass the required parameters to create the invoice
     * @returns {Promise<UniPayInvoiceModel>} - This will return the invoice model
     */
    static createInvoice({ config, paymentData, }: UniPayProps): Promise<UniPayInvoiceModel>;
    /**
     * Get the payment transaction information by passing the transaction id
     * @param {} - pass the required parameters to get the transaction information
     * @returns {Promise<PaymentTransactionModel>} - This will return the payment transaction model
     */
    static getPaymentTransactionById({ config, transactionId, }: Partial<UniPayProps> & Required<Pick<UniPayProps, "transactionId" | "config">>): Promise<PaymentTransactionModel>;
    test(): void;
}
export default UniPay;
