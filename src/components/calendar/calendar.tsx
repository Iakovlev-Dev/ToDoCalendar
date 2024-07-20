import {getAmountDays} from "../../utils.ts";
import {selectCurrentMonth} from "../../store/data-process/selectors.ts";
import {useAppSelector} from "../../store/hooks.ts";



export type CalendarT = {
    onClick: (date: string) => void
}



export default function Calendar({onClick}: CalendarT) {


    const currentMonth = useAppSelector(selectCurrentMonth)
    const amountDays = getAmountDays(currentMonth)

    return (currentMonth &&
        <div className="calendar">
            {Array.from({length: amountDays}).map((_, index) => (
                <div className="calendar-day" key={index} onClick={() => onClick((index + 1).toString())}>
                    {index + 1}
                </div>
            ))}

        </div>
    )
}
