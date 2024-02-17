import { LogType, UniPayLocale, UniPayEnv } from "../enums";
import PaymentResModel from "./paymentRes";
import "../extension/types";
interface IUniPayConfig {
    psKey: string;
    /** Secret key from the [Moyasar] */
    sKey: string;
    /** The environment to use `[UniPayEnv.production, UniPayEnv.staging]` */
    environment: UniPayEnv;
    /** The redirect url after the payment is done */
    redirectUrl: string;
    /** The total amount with Tax of 15% */
    totalAmountWithVat: number;
    /** The name of your business registered */
    businessName: string;
    /** Description for the transaction */
    description?: string;
    /** Locale of payment to show the cusmozied UI default is `[PaymentLocale.ar]`  */
    locale?: UniPayLocale;
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
    psKey: string;
    sKey: string;
    environment: UniPayEnv;
    redirectUrl: string;
    totalAmountWithVat: number;
    businessName: string;
    description?: string;
    locale?: UniPayLocale;
    constructor({ psKey: pKey, sKey, environment, redirectUrl, totalAmountWithVat, businessName, description, locale, }: IUniPayConfig);
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
}
export {};
