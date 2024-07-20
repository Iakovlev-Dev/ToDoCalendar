import {combineReducers} from "@reduxjs/toolkit";
import {NameSpace} from "../const.ts";
import {dataProcess} from "./data-process/data-process.ts";

export const rootReducer = combineReducers({
    [NameSpace.Data]: dataProcess.reducer
})
