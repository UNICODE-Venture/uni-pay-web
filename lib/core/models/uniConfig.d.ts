import { LogType, UniPayLocale, UniPayEnv } from "../enums";
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
    constructor({ psKey, sKey, environment, redirectUrl, totalAmountWithVat, businessName, description, locale, }: Partial<IUniPayConfig> & Required<Pick<IUniPayConfig, "sKey">>);
    /** Get the payment url */
    get paymentSandBoxUrl(): string;
    /** Generate url based on the uni-config */
    get getPaymentGatewayUrl(): string;
    /** Get Transaction details End point */
    fetchTransactionDetailsUrl(paymentRes: PaymentResModel): string;
    /** Get Header Authorization Secret Key */
    get authorizationKey(): string;
    /** log info to console based on the env */
    logInfo(message: string, logType?: LogType): void;
    /** Get Header Authorization Secret Key */
    get authorizationPSKey(): string;
}
export {};
