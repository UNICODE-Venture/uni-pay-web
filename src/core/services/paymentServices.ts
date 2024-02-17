import axios from "axios";
import PaymentTransactionModel from "../models/paymentTransaction";
import PaymentResModel from "../models/paymentRes";
import UniPayConfig from "../models/uniConfig";
import { LogType } from "../enums";
import "../extension/types";

class UniPay {
  /** Initiate the payment */
  static async __initiateUniPayment({
    uniPayConfig,
  }: {
    uniPayConfig: UniPayConfig;
  }) {
    return window.open(uniPayConfig.getPaymentGatewayUrl, "_self");
  }

  /** Verify payment is made from the callback url */
  static async __verifyPaymentTransaction({
    uniPayConfig,
    urlSearchParams,
  }: {
    uniPayConfig: UniPayConfig;
    urlSearchParams?: URLSearchParams;
  }): Promise<PaymentTransactionModel> {
    const callBackParams =
      urlSearchParams ?? new URLSearchParams(window.location.search);
    const { id, status, amount, message } = Object.fromEntries(callBackParams);
    let paymentTransaction = PaymentTransactionModel.emptyInstance();

    const paymentRes = new PaymentResModel({
      transactionId: id ?? "",
      isSuccess: status.isEqualTo("paid") && id !== undefined,
      message: message ?? "",
      amount: Number.parseFloat(amount ?? "0") / 100,
    });

    uniPayConfig.logInfo(`PC => ${paymentRes.toJson()}`, LogType.success);

    if (paymentRes.isSuccess && id) {
      paymentTransaction = await this.__getTransactionInformation({
        uniPayConfig,
        paymentRes,
      });
    } else {
      paymentTransaction.source.message = message;
    }
    uniPayConfig.logInfo(`PT => ${paymentTransaction.toJson()}`);

    return paymentTransaction;
  }

  /** Cross-verify the transaction from the gateway */
  static async __getTransactionInformation({
    uniPayConfig,
    paymentRes,
  }: {
    uniPayConfig: UniPayConfig;
    paymentRes: PaymentResModel;
  }): Promise<PaymentTransactionModel> {
    let payment = PaymentTransactionModel.emptyInstance();

    try {
      const paymentVerifyUrl =
        uniPayConfig.fetchTransactionDetailsUrl(paymentRes);

      const gatewayRes = await axios.get(paymentVerifyUrl, {
        headers: { Authorization: uniPayConfig.authorizationKey },
      });
      uniPayConfig.logInfo(`GR => ${gatewayRes.data}`, LogType.warning);

      payment = PaymentTransactionModel.fromJson(gatewayRes.data, paymentRes);
    } catch (e: any) {
      uniPayConfig.logInfo(`Error => ${e}`, LogType.error);

      payment.source.message = e.message || (e as string);
    }
    return payment;
  }
}

export default UniPay;
