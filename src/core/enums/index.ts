/** Payement Status */
enum UniPayStatus {
  success = "success",
  failed = "failed",
  notSpecified = "notSpecified",
}

enum UniPayCurrency {
  /** [sar] is the currency for Saudi Riyal. */
  sar = "SAR",

  /** [usd] is the currency for United States Dollar. */
  usd = "USD",

  /** [omr] is the currency for Omani Riyal. */
  omr = "OMR",
}

/** Local Saudi Online Payment System `[Mada, Visa, MasterCard, ApplePay, stcpay]` */
enum UniPayOption {
  mada = "mada",
  visa = "visa",
  mastercard = "mastercard",
  applepay = "applepay",
  stcpay = "stcpay",
  amex = "amex",
  notSpecified = "notSpecified",
}

/** Uni Pay Env */
enum UniPayEnv {
  production = "production",
  staging = "staging",
}

/** Locale of Payment */
enum UniPayLocale {
  ar = "ar",
  en = "en",
}

/** Types of Logs */
enum LogType {
  success,
  error,
  warning,
  default,
}

export {
  UniPayStatus,
  UniPayOption,
  UniPayEnv,
  UniPayLocale,
  LogType,
  UniPayCurrency,
};

export class PaymentEnumsHelper {
  /** Get the type of Payment options used */
  static getPaymentOptionType(type = UniPayOption.notSpecified): UniPayOption {
    // MasterCard is also known as master, new changes in the API
    if (type.isEqualTo("master")) return UniPayOption.mastercard;
    switch (type) {
      case "mada":
        return UniPayOption.mada;
      case "visa":
        return UniPayOption.visa;
      case "mastercard":
        return UniPayOption.mastercard;
      case "mastercard":
        return UniPayOption.mastercard;
      case "applepay":
        return UniPayOption.applepay;
      case "stcpay":
        return UniPayOption.stcpay;
      case "amex":
        return UniPayOption.amex;
      default:
        return UniPayOption.notSpecified;
    }
  }
}
