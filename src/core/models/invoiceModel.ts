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

class UniPayInvoiceModel implements IUniPayInvoice {
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

  constructor({
    id,
    status,
    amount,
    currency,
    description,
    logoUrl,
    amountFormat,
    url,
    callbackUrl,
    expiredAt,
    createdAt,
    updatedAt,
    backUrl,
    successUrl,
    metadata,
    errorMessage,
    error,
  }: Partial<IUniPayInvoice>) {
    this.id = id ?? "";
    this.status = status ?? "";
    this.amount = amount ?? -1;
    this.currency = currency ?? "";
    this.description = description ?? "";
    this.logoUrl = logoUrl ?? "";
    this.amountFormat = amountFormat ?? "";
    this.url = url ?? "";
    this.callbackUrl = callbackUrl ?? "";
    this.expiredAt = expiredAt ?? "";
    this.createdAt = createdAt ?? "";
    this.updatedAt = updatedAt ?? "";
    this.backUrl = backUrl ?? "";
    this.successUrl = successUrl ?? "";
    this.metadata = metadata ?? {};
    this.errorMessage = errorMessage;
    this.error = error;
  }

  /** [fromJson] is to conver object to class */
  static fromJson(json: any): UniPayInvoiceModel {
    return new UniPayInvoiceModel({
      id: json["id"],
      status: json["status"],
      amount: json["amount"],
      currency: json["currency"],
      description: json["description"],
      logoUrl: json["logo_url"],
      amountFormat: json["amount_format"],
      url: json["url"],
      callbackUrl: json["callback_url"],
      expiredAt: json["expired_at"],
      createdAt: json["created_at"],
      updatedAt: json["updated_at"],
      backUrl: json["back_url"],
      successUrl: json["success_url"],
      metadata: json["metadata"],
    });
  }

  /** To make sure the invoice is created */
  get isInvoiceCreated(): boolean {
    return this.id !== "" && this.url !== "";
  }
}

export default UniPayInvoiceModel;
