interface IUniPayInvoice {
    id: string;
    status: string;
    amount: number;
    currency: string;
    description: string;
    logoUrl: string;
    amountFormat: string;
    url: string;
    callbackUrl: string;
    expiredAt: string;
    createdAt: string;
    updatedAt: string;
    backUrl: string;
    successUrl: string;
    metadata: Object;
    errorMessage?: string;
    error: any;
}
declare class UniPayInvoiceModel implements IUniPayInvoice {
    id: string;
    status: string;
    amount: number;
    currency: string;
    description: string;
    logoUrl: string;
    amountFormat: string;
    url: string;
    callbackUrl: string;
    expiredAt: string;
    createdAt: string;
    updatedAt: string;
    backUrl: string;
    successUrl: string;
    metadata: Object;
    errorMessage?: string;
    error: any;
    constructor({ id, status, amount, currency, description, logoUrl, amountFormat, url, callbackUrl, expiredAt, createdAt, updatedAt, backUrl, successUrl, metadata, errorMessage, error, }: Partial<IUniPayInvoice>);
    /** [fromJson] is to conver object to class */
    static fromJson(json: any): UniPayInvoiceModel;
    /** To make sure the invoice is created */
    get isInvoiceCreated(): boolean;
}
export default UniPayInvoiceModel;
