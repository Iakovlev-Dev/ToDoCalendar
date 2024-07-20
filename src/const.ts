export enum NameSpace {
    Data = 'Data'
}

export enum Months {
    January = 'Январь',
    February = 'Февраль',
    March = 'Март',
    April = 'Апрель',
    May = 'Май',
    June = 'Июнь',
    July = 'Июль',
    August = 'Август',
    September = 'Сентябрь',
    October = 'Октябрь',
    November = 'Ноябрь',
    December = 'Декабрь'
}

interface Month <T> {
    [key: string]: T;
}
export const MonthsNumber: Month<string> = {
    'Январь': '01',
    'Февраль': '02',
    'Март': '03',
    'Апрель': '04',
    'Май': '05',
    'Июнь': '06',
    'Июль': '07',
    'Август': '08',
    'Сентябрь': '09',
    'Октябрь': '10',
    'Ноябрь': '11',
    'Декабрь': '12'
}
