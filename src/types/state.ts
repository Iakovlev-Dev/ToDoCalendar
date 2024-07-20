import {store} from "../store";

export type DataProcess = {
    currentMonth: string,
    currentDay: string,
    currentYear: string,
}


export type State = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
