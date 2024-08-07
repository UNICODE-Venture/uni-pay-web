import { LogType, UniPayLocale, UniPayEnv } from "../enums";
import LogServices from "../services/logServices";
import PaymentResModel from "./paymentRes";
import "../extension/types";

interface IUniPayConfig {
  /** Secret key from the [Moyasar] */
  sKey: string;
  /** @deprecated Publishable secret key from the [Moyasar] */
  psKey: string;
  /** The environment to use `[UniPayEnv.production, UniPayEnv.staging]` */
  environment: UniPayEnv;
  /** @deprecated The redirect url after the payment is done */
  redirectUrl: string;
  /** @deprecated The total amount with Tax of 15% */
  totalAmountWithVat: number;
  /** @deprecated The name of your business registered */
  businessName: string;
  /** @deprecated Description for the transaction */
  description?: string;
  /** Locale of payment to show the cusmozied UI default is `[PaymentLocale.ar]`  */
  locale: UniPayLocale;
}

/**
 *  @psKey Publishable secret key from the [Moyasar]
 *  @sKey Secret key from the [Moyasar]
 *  @environment The environment to use `[UniPayEnv.production, UniPayEnv.staging]`
 *  @redirectUrl The `redirect url` after the payment is done
 *  @totalAmountWithVat The `total amount` with Tax of `15%` and not less than 2 `SAR`
 *  @description Description for the transaction must be in English
 *  @locale Locale of payment to show the cusmozied UI default is `[PaymentLocale.ar]`
 *  */
export default class UniPayConfig implements IUniPayConfig {
  sKey: string;
  psKey: string;
  environment: UniPayEnv;
  redirectUrl: string;
  totalAmountWithVat: number;
  businessName: string;
  description?: string;
  locale: UniPayLocale;

  constructor({
    psKey,
    sKey,
    environment,
    redirectUrl,
    totalAmountWithVat,
    businessName,
    description,
    locale = UniPayLocale.ar,
  }: Partial<IUniPayConfig> & Required<Pick<IUniPayConfig, "sKey">>) {
    this.psKey = psKey ?? "";
    this.sKey = sKey;
    this.environment = environment ?? UniPayEnv.production;
    this.redirectUrl = redirectUrl ?? "";
    this.totalAmountWithVat = totalAmountWithVat ?? 0;
    this.businessName = businessName ?? "";
    this.description = description || businessName;
    this.locale = locale;
  }

  /** Get the payment url */
  get paymentSandBoxUrl() {
    return "https://unicode-moyasar.web.app/?purchaseAmount";
  }

  /** Generate url based on the uni-config */
  get getPaymentGatewayUrl() {
    const keyEncoded = this.psKey.toBase64();
    const amount = this.totalAmountWithVat.formatNumToString();
    return `${this.paymentSandBoxUrl}=${amount}&appName=${this.description}&pSk=${keyEncoded}&locale=${this.locale}&paymentOptions=0,1&callBackUrl=${this.redirectUrl}/`;
  }

  /** Get Transaction details End point */
  fetchTransactionDetailsUrl(paymentRes: PaymentResModel) {
    return `https://api.moyasar.com/v1/payments/${paymentRes.transactionId}`;
  }

  /** Get Header Authorization Secret Key */
  get authorizationKey() {
    const authKey = `Basic ${`${this.sKey}:`.toBase64()}`;
    return authKey;
  }

  /** log info to console based on the env */
  logInfo(message: string, logType = LogType.default) {
    if (this.environment.isEqualTo(UniPayEnv.staging)) {
      switch (logType) {
        case LogType.success:
          return LogServices.success(message);
        case LogType.error:
          return LogServices.error(message);
        case LogType.warning:
          return LogServices.warning(message);
        default:
          return LogServices.default(message);
      }
    }
    return;
  }
  /** Get Header Authorization Secret Key */
  get authorizationPSKey() {
    const authKey = `Basic ${`${this.psKey}:`.toBase64()}`;
    return authKey;
  }
}
