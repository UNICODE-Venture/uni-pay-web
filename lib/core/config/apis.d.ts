export default class Apis {
    /** Base URL */
    static readonly moyasarUrl: string;
    /** invoices [end-point] */
    static readonly invoices: string;
    /** payments [end-point] */
    static payments(id: string): string;
}
