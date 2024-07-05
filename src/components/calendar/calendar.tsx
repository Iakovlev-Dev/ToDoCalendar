export type CalendarT = {
    onClick: () => void
}

export default function Calendar({onClick}: CalendarT) {
    return (
        <div className="calendar">
            {Array.from({length: 30}).map((_, index) => (
                <div className="calendar-day" key={index} onClick={onClick}>
                    {index + 1}
                </div>
            ))}

        </div>
    )
}
