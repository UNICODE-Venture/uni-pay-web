import Apis from "../config/apis";
import axiosClient from "../config/axiosClient";
import UniPayInvoiceModel from "../models/invoiceModel";
import UniPayConfig from "../models/uniConfig";
import UniPayInvoiceDTO from "../models/uniPayDto";

class InvoicesMethods {
  /// Create Invoice ---------------------
  static async createInvoice({
    config,
    paymentData,
  }: {
    config: UniPayConfig;
    paymentData: UniPayInvoiceDTO;
  }) {
    try {
      const response = await axiosClient.post(
        Apis.invoices,
        paymentData.toJson(config.locale),
        {
          headers: { Authorization: config.authorizationKey },
        }
      );
      if (response.status == 200 || response.status == 201) {
        return UniPayInvoiceModel.fromJson(response.data);
      } else {
        return new UniPayInvoiceModel({
          errorMessage: "Failed to create the invoice",
          error: response.data,
        });
      }
    } catch (error) {
      return new UniPayInvoiceModel({
        errorMessage: "Exception occurred while creating the invoice",
        error: error,
      });
    }
  }
}

export default InvoicesMethods;
