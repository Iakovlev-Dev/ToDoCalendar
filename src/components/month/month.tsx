import {useState} from "react";

export default function Month() {
    const [isActive, setActive] = useState(false);
    const handleClickBtn = () => {
        setActive(!isActive)
    }

    const handleClickMonth = () => {
        console.log('click')
    }
    return (

            <div className="month-select">
                <div className="month-menu-btn" onClick={handleClickBtn}>
                    <span className="month-menu-btn-text">Выберите месяц</span>
                    <i className="arrow-down"></i>
                </div>

                <ul className={`month-select-options ${isActive ? 'open' : ''}`}>
                    <li className="month-select-option" onClick={handleClickMonth} value="Январь">
                        <span className="month-option-text">Январь</span>
                    </li>
                    <li className="month-select-option">
                        <span className="month-option-text">Февраль</span>
                    </li>
                    <li className="month-select-option">
                        <span className="month-option-text">Март</span>
                    </li>
                    <li className="month-select-option">
                        <span className="month-option-text">Апрель</span>
                    </li>
                    <li className="month-select-option">
                        <span className="month-option-text">Май</span>
                    </li>
                    <li className="month-select-option">
                        <span className="month-option-text">Июнь</span>
                    </li>
                    <li className="month-select-option">
                        <span className="month-option-text">Июль</span>
                    </li>
                    <li className="month-select-option">
                        <span className="month-option-text">Август</span>
                    </li>
                    <li className="month-select-option">
                        <span className="month-option-text">Сентябрь</span>
                    </li>
                    <li className="month-select-option">
                        <span className="month-option-text">Октябрь</span>
                    </li>
                    <li className="month-select-option">
                        <span className="month-option-text">Ноябрь</span>
                    </li>
                    <li className="month-select-option">
                        <span className="month-option-text">Декабрь</span>
                    </li>

                </ul>
            </div>
    )
}
