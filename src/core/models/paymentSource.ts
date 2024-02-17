import { PaymentEnumsHelper, UniPayOption } from "../enums";

interface IPaymentSource {
  type: string;
  paymentType: UniPayOption;
  name: string;
  cardNumber: string;
  message: string;
  gatewayId: string;
  referenceNumber: string;
}

class PaymentSource implements IPaymentSource {
  type: string;
  paymentType: UniPayOption;
  name: string;
  cardNumber: string;
  message: string;
  gatewayId: string;
  referenceNumber: string;

  constructor({
    type,
    paymentType,
    name,
    cardNumber,
    message,
    gatewayId,
    referenceNumber,
  }: IPaymentSource) {
    this.type = type;
    this.paymentType = paymentType;
    this.name = name;
    this.cardNumber = cardNumber;
    this.message = message;
    this.gatewayId = gatewayId;
    this.referenceNumber = referenceNumber;
  }

  /** From Res To Model */
  static fromJson(res: any) {
    return new PaymentSource({
      type: res.type ?? "",
      paymentType: PaymentEnumsHelper.getPaymentOptionType(res.company),
      name: res.name ?? "",
      cardNumber: res.number ?? "xxxx-xxxx-xxxx-xxxx",
      message: res.message ?? "",
      gatewayId: res.gateway_id ?? "",
      referenceNumber: res.reference_number ?? "",
    });
  }

  /** Model To Json */
  toJson() {
    return {
      type: this.type,
      paymentType: this.paymentType,
      name: this.name,
      cardNumber: this.cardNumber,
      message: this.message,
      gatewayId: this.gatewayId,
      referenceNumber: this.referenceNumber,
    };
  }
}

export default PaymentSource;
