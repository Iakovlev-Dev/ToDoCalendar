import {store} from "../store";
import {TToDos} from "./todos.ts";

export type DataProcess = {
    currentMonth: string,
    currentDay: string,
    currentYear: string,
    listToDos: TToDos
}


export type State = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
