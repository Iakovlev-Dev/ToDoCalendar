import Header from "./components/title/title.tsx";
import Month from "./components/month/month.tsx";
import Calendar from "./components/calendar/calendar.tsx";
import ListTasks from "./components/list-tasks/list-tasks.tsx";
import {useState} from "react";
import {useAppDispatch} from "./store/hooks.ts";
import {setCurrentDate} from "./store/data-process/data-process.ts";

export default function App() {
    const dispatch = useAppDispatch()

    const [isOpenModal, setIsOpenModal] = useState(false);
    const handleClickOpenModal = (date: string) => {
        setIsOpenModal(!isOpenModal);
        dispatch(setCurrentDate(date))
    }
    const handleClickCloseModal = () => {
        setIsOpenModal(!isOpenModal);
    }
    return (
      <>
        <Header />
        <Month />
        <Calendar onClick={handleClickOpenModal} />
        {isOpenModal && <ListTasks onClick={handleClickCloseModal} />}
      </>

  )
}

