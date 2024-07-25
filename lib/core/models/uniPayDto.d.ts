import { UniPayCurrency, UniPayLocale } from "../enums";
interface IUniPayDto {
    /** The amount of the transaction including the vat/tax of 15% (If applied) in Halala's
     *
     *  Amount in the smallest currency unit (Halala's).
     *
     * For example:
     *
     * 10 SAR = 10 * 100 Halalas
     *
     * 10 KWD = 10 * 1000 Fils
     *
     * 10 JPY = 10 JPY (Japanese Yen does not have fractions)
     */
    amount: number;
    /** 3-letter ISO code for currency. (default: SAR) */
    currency: UniPayCurrency;
    /** An arbitrary string that you can attach to an invoice object. This may include a description of the merchandise or the service that your customer is billed for. The invoice description is displayed on the invoice alongside the amount when the invoice is presented to the user. */
    description: string;
    /** Specifies when the invoice will get expired. An expired invoice cannot have payment attempts as its status will be expired. */
    expiredAt: string;
    /** An endpoint on your site, that we will redirect to after the customer pays successfully. */
    successUrl: string;
    /** An endpoint on your site, that we will redirect to after the user clicks on the back button. */
    backUrl: string;
    /** Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to metadata. */
    metadata: Object;
    /** An endpoint on your server, for receiving notifications about paid invoices via webhook. */
    callbackUrl?: string;
}
declare class UniPayInvoiceDTO implements IUniPayDto {
    amount: number;
    currency: UniPayCurrency;
    description: string;
    expiredAt: string;
    successUrl: string;
    backUrl: string;
    metadata: Object;
    callbackUrl?: string | undefined;
    constructor({ amount, currency, description, expiredAt, successUrl, backUrl, metadata, callbackUrl, }: IUniPayDto);
    /** [toJson] is to convert class into the json */
    toJson(locale?: UniPayLocale): {
        callback_url?: string | undefined;
        metadata: Object;
        back_url?: string | undefined;
        success_url?: string | undefined;
        expired_at?: string | undefined;
        amount: number;
        currency: UniPayCurrency;
        description: string;
        language: UniPayLocale;
    };
}
export default UniPayInvoiceDTO;
