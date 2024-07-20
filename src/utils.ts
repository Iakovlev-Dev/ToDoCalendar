import {Months} from "./const.ts";

export function getAmountDays (month: string | null) {
    switch (month) {
        case Months.February:
            return 28
        case Months.January:
        case Months.March:
        case Months.May:
        case Months.July:
        case Months.August:
        case Months.October:
        case Months.December:
            return 31
        case Months.April:
        case Months.June:
        case Months.September:
        case Months.November:
            return 30
        default:
            return 0
    }
}

export function getDate (day: string, month: string): string {
    if (month === Months.March || month === Months.August) {
        month = month + 'а'
    } else {
        month = month.slice(0, -1) + 'я'
    }
    return day + ' ' + month

}
