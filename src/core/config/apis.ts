export default class Apis {
  /** Base URL */
  static readonly moyasarUrl: string = "https://api.moyasar.com/v1";

  /** invoices [end-point] */
  static readonly invoices: string = "/invoices";

  /** payments [end-point] */
  static payments(id: string): string {
    return `/payments/${id}`;
  }
}
