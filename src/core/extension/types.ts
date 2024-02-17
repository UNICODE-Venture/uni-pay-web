import { UniPayOption } from "../enums";

declare global {
  interface String {
    /** Is equal to => provided string */
    isEqualTo(value?: string): boolean;

    /** Is not equal to => provided string */
    isNotEqualTo(value: string): boolean;

    /** Is empty provided string */
    isEmpty(): boolean;

    /** Is Not empty provided string */
    isNotEmpty(): boolean;

    /** Is True or False */
    isNotSpecified(): boolean;

    /** String to `Base64` String */
    toBase64(): string;
  }

  interface Number {
    /** Formatted Number like `5.00 -> 5`  or `10.5399 -> 10.53` */
    formattedNumber(): number;

    /** Formatted number to the string */
    formatNumToString(): string;
  }
}

/**------------------- String extention -------------------*/
String.prototype.isEqualTo = function (value?: string) {
  return this === value;
};

String.prototype.isNotEqualTo = function (value: string) {
  return this !== value;
};

String.prototype.isEmpty = function () {
  return this === "" || this.trim().length === 0;
};
String.prototype.isNotEmpty = function () {
  return !this.isEmpty();
};
String.prototype.isNotSpecified = function () {
  return this === UniPayOption.notSpecified;
};

String.prototype.toBase64 = function () {
  return Buffer.from(this).toString("base64");
};

/** ------------------- Number Extention -------------------*/

Number.prototype.formattedNumber = function (): number {
  const number = Number(this);
  if (number % 1 === 0) return Number.parseInt(number.toFixed(0));
  else return Number.parseFloat(number.toFixed(2));
};

Number.prototype.formatNumToString = function () {
  return Number(this).formattedNumber().toString();
};

export {};
