import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NameSpace} from "../../const.ts";
import {DataProcess} from "../../types/state.ts";
import {toDos} from "../../mocks/todos.ts";


const initialState: DataProcess = {
    currentMonth: '',
    currentDay: '',
    currentYear: '2024',
    listToDos: toDos
}

export const dataProcess = createSlice({
    name: NameSpace.Data,
    initialState,
    reducers: {
        setCurrentMonth: (state: DataProcess, action: PayloadAction<string>) => {
            state.currentMonth = action.payload;
        },
        setCurrentDate: (state: DataProcess, action: PayloadAction<string>) => {
            state.currentDay = action.payload;
        }
    }
})

export const {setCurrentMonth, setCurrentDate} = dataProcess.actions;
