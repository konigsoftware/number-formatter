export declare function removeLeadingHyphen(s: string): string;
export type FormattingOptions = {
    fractionDigits?: number;
    minFractionDigits?: number;
    currencySign?: string;
    endSign?: string;
    showPlusSign?: boolean;
};
export declare const PercentChangeFormatting: {
    fractionDigits: number;
    showPlusSign: boolean;
    endSign: string;
};
export declare const UsdFormatting: {
    fractionDigits: number;
    currencySign: string;
};
export declare const PercentFormatting: {
    fractionDigits: number;
    endSign: string;
};
export declare const CryptoFormatting: {
    fractionDigits: number;
    minFractionDigits: number;
};
export declare function formatNumberAmount(amount: number | undefined, { fractionDigits, minFractionDigits, currencySign, endSign, showPlusSign, }: FormattingOptions): string;
export declare function formatStringAmount(amount: string, options: FormattingOptions): string;
