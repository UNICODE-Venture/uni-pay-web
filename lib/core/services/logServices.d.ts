export default class LogServices {
    /** Success message to console */
    static success(msg: string): void;
    /** Error message to console */
    static error(msg: string): void;
    /** Warning message to console */
    static warning(msg: string): void;
    /** Default message to console */
    static default(msg: string): void;
}
