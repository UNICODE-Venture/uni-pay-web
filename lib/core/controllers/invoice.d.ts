import UniPayInvoiceModel from "../models/invoiceModel";
import UniPayConfig from "../models/uniConfig";
import UniPayInvoiceDTO from "../models/uniPayDto";
declare class InvoicesMethods {
    static createInvoice({ config, paymentData, }: {
        config: UniPayConfig;
        paymentData: UniPayInvoiceDTO;
    }): Promise<UniPayInvoiceModel>;
}
export default InvoicesMethods;
