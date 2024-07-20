import React from "react";
import {useAppSelector} from "../../store/hooks.ts";
import {
    selectCurrentDay,
    selectCurrentMonth,
    selectCurrentYear,
    selectListToDos
} from "../../store/data-process/selectors.ts";
import {getDate} from "../../utils.ts";
import {MonthsNumber} from "../../const.ts";

export type ListTasksT = {
    onClick: () => void
}

export default function ListTasks({onClick}: ListTasksT ) {
    const currentDate = useAppSelector(selectCurrentDay)
    const currentMonth = useAppSelector(selectCurrentMonth)

    const currentYear = useAppSelector(selectCurrentYear)
    const list = useAppSelector(selectListToDos)

    const date = currentDate + '/' + MonthsNumber[currentMonth] + '/' + currentYear

    const currentDateList = list.find((item) => item.id === date)
    const handleCloseModal = (evt: React.MouseEvent<HTMLDivElement,MouseEvent>) => {
        if((evt.target as Element).className === 'modal') {
            onClick()
        }
    }

    console.log(currentDateList)
    return (currentDateList &&
        <div className="modal" id="myModal" onClick={(evt)=> handleCloseModal(evt)}>
            <div className="modal-content">
                <div className="modal-header">
                    <h3>{getDate(currentDate, currentMonth)}</h3>
                    <button className="modal-button-close" onClick={onClick}>x</button>
                </div>
                <div className="modal-body">
                    <p>Список задач на сегодня</p>
                    <ul>
                            <div className="task-list">
                                {currentDateList.listToDo.map((item, index) => (
                                    <div className="task-item" key={index}>
                                        <div>
                                            <li>{item.text}</li>
                                        </div>
                                        <div className="task-buttons">
                                            <div className="edit"/>
                                            <div className="delete"/>
                                        </div>
                                    </div>

                                ))}
                            </div>
                    </ul>

                </div>
                <div className="add-task">
                    <input id="text-task"/>
                    <button>Добавить</button>
                </div>


            </div>
        </div>
    )
}
