import _ from "lodash";

export function removeLeadingHyphen(s: string): string {
    return s.replace(/^-/, "");
}

export type FormattingOptions = {
    fractionDigits?: number;
    minFractionDigits?: number;
    currencySign?: string;
    endSign?: string;
    showPlusSign?: boolean;
};

export const PercentChangeFormatting = {
    fractionDigits: 2,
    showPlusSign: true,
    endSign: "%",
};

export const UsdFormatting = {
    fractionDigits: 2,
    currencySign: "$",
};

export const PercentFormatting = {
    fractionDigits: 0,
    endSign: "%",
};

export const CryptoFormatting = {
    fractionDigits: 4,
    minFractionDigits: 2,
};

export function formatNumberAmount(
    amount: number | undefined,
    {
        fractionDigits = 2,
        minFractionDigits = 2,
        currencySign = "",
        endSign = "",
        showPlusSign = false,
    }: FormattingOptions
): string {
    if (amount === undefined || amount === null) return "";

    const leadingZeros = _.takeWhile(
        String(amount),
        (c) => c === "0" || c === "."
    ).length;
    if (leadingZeros > 3) {
        fractionDigits = leadingZeros;
    }

    let numberAsString = amount.toLocaleString(undefined, {
        minimumFractionDigits: Math.min(minFractionDigits, fractionDigits),
        maximumFractionDigits: fractionDigits,
    });

    if (currencySign) {
        numberAsString =
            amount < 0
                ? `-$${removeLeadingHyphen(numberAsString)}`
                : `$${numberAsString}`;
    }

    if (showPlusSign && amount > 0) {
        numberAsString = `+${numberAsString}`;
    }

    if (endSign) {
        numberAsString = `${numberAsString} ${endSign}`;
    }

    return numberAsString;
}

export function formatStringAmount(
    amount: string,
    options: FormattingOptions
): string {
    if (!amount) return "";

    return formatNumberAmount(parseFloat(amount), options);
}
