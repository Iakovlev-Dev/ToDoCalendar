import Header from "./components/title/title.tsx";
import Month from "./components/month/month.tsx";
import Calendar from "./components/calendar/calendar.tsx";
import ListTasks from "./components/list-tasks/list-tasks.tsx";
import {useState} from "react";

export default function App() {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const handleClickOpenModal = () => {
        setIsOpenModal(!isOpenModal);
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

