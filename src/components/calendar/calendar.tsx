export default function Calendar() {
    return (
        <div className="calendar">
            {Array.from({length: 30}).map((_, index) => (
                <div className="calendar-day">
                    {index + 1}
                </div>
            ))}

        </div>
    )
}
