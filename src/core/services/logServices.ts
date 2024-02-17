export default class LogServices {
  /** Success message to console */
  static success(msg: string) {
    console.log(`%c ${msg}`, "color: green");
  }

  /** Error message to console */
  static error(msg: string) {
    console.log(`%c ${msg}`, "color: red");
  }

  /** Warning message to console */
  static warning(msg: string) {
    console.log(`%c ${msg}`, "color: black; background: yellow");
  }

  /** Default message to console */
  static default(msg: string) {
    console.log(msg);
  }
}
