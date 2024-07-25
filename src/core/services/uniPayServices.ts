import PaymentTransactionModel from "../models/paymentTransaction";
import UniPayConfig from "../models/uniConfig";
import "../extension/types";
import UniPayController from "../controllers/uniPayController";
import UniPayInvoiceDTO from "../models/uniPayDto";
import Utils from "../utils";
import InvoicesMethods from "../controllers/invoice";
import UniPayInvoiceModel from "../models/invoiceModel";

interface UniPayProps {
  config: UniPayConfig;
  urlSearchParams?: URLSearchParams;
  paymentData: UniPayInvoiceDTO;
  transactionId?: string;
}
class UniPay {
  /** @deprecated
   * - Use `UniPay.makePayment` instead to
   *  make the payment */
  static async initiateUniPayment({
    uniPayConfig,
  }: {
    uniPayConfig: UniPayConfig;
  }) {
    return Utils.openTab(uniPayConfig.getPaymentGatewayUrl);
  }

  /** Make payment using the invoice features
   * provided by Moyasar payment gateway
   * pass the required parameters to make the payment
   * @param {} - pass the required parameters to make the payment
   * @returns This will open a self tab to make the payment
   */
  static async makePayment({ config, paymentData }: UniPayProps) {
    return UniPayController.initiatePaymentByInvoice({
      config: config,
      paymentData: paymentData,
    });
  }

  /** Verify payment is made from the callback url, you can pass `urlSearchParams`
   *  or it will take the query params from the current url
   */
  static async verifyPaymentByQueryParams({
    config,
    urlSearchParams,
  }: Partial<UniPayProps> &
    Required<Pick<UniPayProps, "config">>): Promise<PaymentTransactionModel> {
    return UniPayController.verifyPaymentByQueryParams({
      config: config,
      urlSearchParams: urlSearchParams,
    });
  }

  /** Create an invoice to make the payment
   * pass the required parameters to create the invoice
   * @param {} - pass the required parameters to create the invoice
   * @returns {Promise<UniPayInvoiceModel>} - This will return the invoice model
   */
  static async createInvoice({
    config,
    paymentData,
  }: UniPayProps): Promise<UniPayInvoiceModel> {
    return InvoicesMethods.createInvoice({
      config: config,
      paymentData: paymentData,
    });
  }

  /**
   * Get the payment transaction information by passing the transaction id
   * @param {} - pass the required parameters to get the transaction information
   * @returns {Promise<PaymentTransactionModel>} - This will return the payment transaction model
   */
  static async getPaymentTransactionById({
    config,
    transactionId,
  }: Partial<UniPayProps> &
    Required<
      Pick<UniPayProps, "transactionId" | "config">
    >): Promise<PaymentTransactionModel> {
    return UniPayController.getTransactionInformation({
      uniPayConfig: config,
      transactionId: transactionId,
    });
  }
  test() {
    UniPay.getPaymentTransactionById({
      config: new UniPayConfig({
        psKey: "pk_test_key",
        sKey: "sk_test_key",
      }),
      transactionId: "abc12345",
    });
  }
}

export default UniPay;
