import Apis from "../config/apis";
import axiosClient from "../config/axiosClient";
import { LogType } from "../enums";
import PaymentResModel from "../models/paymentRes";
import PaymentTransactionModel from "../models/paymentTransaction";
import UniPayConfig from "../models/uniConfig";
import UniPayInvoiceDTO from "../models/uniPayDto";
import Utils from "../utils";
import InvoicesMethods from "./invoice";

export default class UniPayController {
  /** Cross-verify the transaction from the gateway */
  static async getTransactionInformation({
    uniPayConfig,
    transactionId,
  }: {
    uniPayConfig: UniPayConfig;
    transactionId: string;
  }): Promise<PaymentTransactionModel> {
    let payment = PaymentTransactionModel.emptyInstance();

    try {
      const gatewayRes = await axiosClient.get(Apis.payments(transactionId), {
        headers: { Authorization: uniPayConfig.authorizationKey },
      });
      uniPayConfig.logInfo(`GR => ${gatewayRes.data}`, LogType.warning);
      payment = PaymentTransactionModel.fromJson(
        gatewayRes.data,
        transactionId
      );
    } catch (e: any) {
      uniPayConfig.logInfo(`Error => ${e}`, LogType.error);
      payment.source.message = e.message || JSON.stringify(e);
    }
    return payment;
  }

  /** Intiate the payment */
  static async initiatePaymentByInvoice({
    config,
    paymentData,
  }: {
    config: UniPayConfig;
    paymentData: UniPayInvoiceDTO;
  }) {
    const invoice = await InvoicesMethods.createInvoice({
      config: config,
      paymentData: paymentData,
    });
    if (invoice.isInvoiceCreated) {
      Utils.openTab(invoice.url);
    }
    return invoice;
  }

  /** Verify payment is made from the callback url, you can pass `urlSearchParams`
   *  or it will take the query params from the current url
   */
  static async verifyPaymentByQueryParams({
    config,
    urlSearchParams,
  }: {
    config: UniPayConfig;
    urlSearchParams?: URLSearchParams;
  }): Promise<PaymentTransactionModel> {
    let paymentTransaction = PaymentTransactionModel.emptyInstance();
    const callBackParams =
      urlSearchParams ?? new URLSearchParams(window.location.search);

    const { id, status, amount, message } = Object.fromEntries(callBackParams);

    const paymentRes = new PaymentResModel({
      transactionId: id ?? "",
      isSuccess: status?.isEqualTo("paid") && id !== undefined,
      message: message ?? "",
      amount: Number.parseFloat(amount ?? "0") / 100,
    });

    config.logInfo(`PC => ${paymentRes.toJson()}`, LogType.success);

    // If payment is successful, then get the transaction information
    if (paymentRes.isSuccess && id) {
      paymentTransaction = await UniPayController.getTransactionInformation({
        uniPayConfig: config,
        transactionId: paymentRes.transactionId,
      });
    }
    // If payment is failed, then set the message and status
    else {
      paymentTransaction.source.message = message;
    }
    config.logInfo(`PT => ${paymentTransaction.toJson()}`);
    return paymentTransaction;
  }
}
