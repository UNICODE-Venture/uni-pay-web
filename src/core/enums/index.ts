/** Payement Status */
enum UniPayStatus {
  success = "success",
  failed = "failed",
  notSpecified = "notSpecified",
}

/** Local Saudi Online Payment System `[Mada, Visa, MasterCard, ApplePay, stcpay]` */
enum UniPayOption {
  mada = "mada",
  visa = "visa",
  mastercard = "mastercard",
  applepay = "applepay",
  stcpay = "stcpay",
  notSpecified = "notSpecified",
}

/** Uni Pay Env */
enum UniPayEnv {
  production = "production",
  staging = "staging",
}

/** Locale of Payment */
enum UniPayLocale {
  ar,
  en,
}

/** Types of Logs */
enum LogType {
  success,
  error,
  warning,
  default,
}

export { UniPayStatus, UniPayOption, UniPayEnv, UniPayLocale, LogType };

export class PaymentEnumsHelper {
  /** Get the type of Payment options used */
  static getPaymentOptionType(type = UniPayOption.notSpecified): UniPayOption {
    switch (type) {
      case "mada":
        return UniPayOption.mada;
      case "visa":
        return UniPayOption.visa;
      case "mastercard":
        return UniPayOption.mastercard;
      case "applepay":
        return UniPayOption.applepay;
      case "stcpay":
        return UniPayOption.stcpay;
      default:
        return UniPayOption.notSpecified;
    }
  }
}
