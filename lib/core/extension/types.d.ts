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
export {};
