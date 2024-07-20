import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import {selectCurrentMonth, selectCurrentYear} from "../../store/data-process/selectors.ts";
import {Months} from "../../const.ts";
import {setCurrentMonth} from "../../store/data-process/data-process.ts";

export default function Month() {
    const dispatch = useAppDispatch();
    const currentMonth = useAppSelector(selectCurrentMonth)
    const currentYear = useAppSelector(selectCurrentYear)
    const [isActive, setActive] = useState(false);
    const handleClickBtn = () => {
        setActive(!isActive)
    }

    const handleClickMonth = (month: string) => {
        setActive(!isActive)
        dispatch(setCurrentMonth(month))
    }

    const newArrFromMonth = Object.entries(Months)
    return (

            <div className="month-select">
                <div className="month-select__container">
                    <div className="month-menu-btn" onClick={handleClickBtn}>
                        <span className="month-menu-btn-text">
                        {currentMonth === '' ? 'Выберите месяц' : currentMonth}
                        </span>
                        <i className="arrow-down"></i>
                    </div>
                    <div className="year-menu-btn" >
                        <span className="year-menu-btn-text">
                            {currentYear} год
                        </span>
                    </div>

                </div>


                <ul className={`month-select-options ${isActive ? 'open' : ''}`}>
                    {newArrFromMonth.map(([item1, item2]) => (
                        <li className="month-select-option" onClick={() => handleClickMonth(item2)} key={item1}>
                        <span className="month-option-text">{item2}</span>
                            </li>
                        )
                    )}
                </ul>
            </div>
    )
}
