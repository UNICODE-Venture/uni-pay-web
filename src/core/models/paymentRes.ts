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

  constructor({ transactionId, isSuccess, message, amount }: IPaymentResModel) {
    this.transactionId = transactionId;
    this.isSuccess = isSuccess;
    this.message = message;
    this.amount = amount;
  }

  /** Model to Json */
  toJson() {
    return {
      transactionId: this.transactionId,
      isSuccess: this.isSuccess,
      message: this.message,
      amount: this.amount,
    };
  }
}
