import {State} from "../../types/state.ts";
import {NameSpace} from "../../const.ts";

export const selectCurrentMonth = (state: State) => state[NameSpace.Data].currentMonth;
export const selectCurrentDay = (state: State) => state[NameSpace.Data].currentDay;
export const selectCurrentYear = (state: State) => state[NameSpace.Data].currentYear;
export const selectListToDos = (state: State) => state[NameSpace.Data].listToDos;
