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

class PaymentTransactionModel implements IPaymentTransactionModel {
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

  constructor({
    transactionId,
    paymentStatus,
    amount,
    fee,
    currency,
    description,
    amountFormatted,
    ip,
    createdAt,
    invoiceId,
    source,
  }: IPaymentTransactionModel) {
    this.transactionId = transactionId;
    this.paymentStatus = paymentStatus;
    this.amount = amount;
    this.fee = fee;
    this.currency = currency;
    this.description = description;
    this.amountFormatted = amountFormatted;
    this.ip = ip;
    this.createdAt = createdAt;
    this.invoiceId = invoiceId;
    this.source = source;
  }

  /** From Res To Model */
  static fromJson(res: any, paymenrRes: PaymentResModel) {
    return new PaymentTransactionModel({
      transactionId: res.id ?? paymenrRes.transactionId,
      paymentStatus:
        res.id && res.status === "paid"
          ? UniPayStatus.success
          : UniPayStatus.failed,
      amount: (res.amount ?? 0) / 100,
      fee: (res.fee ?? 0) / 100,
      currency: res.currency ?? "SAR",
      description: res.description ?? "",
      amountFormatted: res.amountFormatted ?? "0.00 SAR",
      ip: res.ip ?? "0.0.0.0",
      createdAt: new Date(res.createdAt ?? new Date().toISOString()),
      invoiceId: res.invoiceId ?? "",
      source: PaymentSource.fromJson(res.source),
    });
  }

  /** Model To Json */
  toJson() {
    return {
      transactionId: this.transactionId,
      paymentStatus: this.paymentStatus,
      amount: this.amount,
      fee: this.fee,
      currency: this.currency,
      description: this.description,
      amountFormatted: this.amountFormatted,
      ip: this.ip,
      createdAt: this.createdAt,
      invoiceId: this.invoiceId,
      paymentSource: this.source.toJson(),
    };
  }

  /** Is Payment Successfull */
  get isPaymentSuccessfull(): boolean {
    return (
      this.paymentStatus === UniPayStatus.success && this.transactionId !== ""
    );
  }

  /** Is used `Apple Pay` */
  isApplePay(): boolean {
    return this.source.paymentType === UniPayOption.applepay;
  }

  /** Empty model instance */
  static emptyInstance() {
    return new PaymentTransactionModel({
      transactionId: "",
      paymentStatus: UniPayStatus.failed,
      amount: 0,
      fee: 0,
      currency: "SAR",
      description: "",
      amountFormatted: "0.00 SAR",
      ip: "",
      createdAt: new Date(),
      invoiceId: "",
      source: new PaymentSource({
        type: "",
        paymentType: UniPayOption.notSpecified,
        name: "",
        cardNumber: "xxxx-xxxx-xxxx-xxxx",
        message: "Some Error Occured",
        gatewayId: "",
        referenceNumber: "",
      }),
    });
  }
}

export default PaymentTransactionModel;
