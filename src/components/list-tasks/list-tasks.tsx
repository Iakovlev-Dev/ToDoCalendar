export type ListTasksT = {
    onClick: () => void
}

export default function ListTasks({onClick}: ListTasksT ) {
    return (
        <div className="modal" id="myModal" >
            <div className="modal-content">
                <div className="modal-header">
                    <h3>5 Июля</h3>
                    <button className="modal-button-close" onClick={onClick}>x</button>
                </div>
                <div className="modal-body">
                    <p>Список задач на сегодня</p>
                    <ul className="task-list">
                        <li className="task-item">Погулять</li>
                        <li className="task-item">Посмотреть фильм</li>
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
