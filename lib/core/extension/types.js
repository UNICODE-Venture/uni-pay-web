"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
/**------------------- String extention -------------------*/
String.prototype.isEqualTo = function (value) {
    return this === value;
};
String.prototype.isNotEqualTo = function (value) {
    return this !== value;
};
String.prototype.isEmpty = function () {
    return this === "" || this.trim().length === 0;
};
String.prototype.isNotEmpty = function () {
    return !this.isEmpty();
};
String.prototype.isNotSpecified = function () {
    return this === enums_1.UniPayOption.notSpecified;
};
String.prototype.toBase64 = function () {
    return Buffer.from(this).toString("base64");
};
/** ------------------- Number Extention -------------------*/
Number.prototype.formattedNumber = function () {
    var number = Number(this);
    if (number % 1 === 0)
        return Number.parseInt(number.toFixed(0));
    else
        return Number.parseFloat(number.toFixed(2));
};
Number.prototype.formatNumToString = function () {
    return Number(this).formattedNumber().toString();
};
