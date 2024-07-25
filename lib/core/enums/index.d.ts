/** Payement Status */
declare enum UniPayStatus {
    success = "success",
    failed = "failed",
    notSpecified = "notSpecified"
}
declare enum UniPayCurrency {
    /** [sar] is the currency for Saudi Riyal. */
    sar = "SAR",
    /** [usd] is the currency for United States Dollar. */
    usd = "USD",
    /** [omr] is the currency for Omani Riyal. */
    omr = "OMR"
}
/** Local Saudi Online Payment System `[Mada, Visa, MasterCard, ApplePay, stcpay]` */
declare enum UniPayOption {
    mada = "mada",
    visa = "visa",
    mastercard = "mastercard",
    applepay = "applepay",
    stcpay = "stcpay",
    amex = "amex",
    notSpecified = "notSpecified"
}
/** Uni Pay Env */
declare enum UniPayEnv {
    production = "production",
    staging = "staging"
}
/** Locale of Payment */
declare enum UniPayLocale {
    ar = "ar",
    en = "en"
}
/** Types of Logs */
declare enum LogType {
    success = 0,
    error = 1,
    warning = 2,
    default = 3
}
export { UniPayStatus, UniPayOption, UniPayEnv, UniPayLocale, LogType, UniPayCurrency, };
export declare class PaymentEnumsHelper {
    /** Get the type of Payment options used */
    static getPaymentOptionType(type?: UniPayOption): UniPayOption;
}
