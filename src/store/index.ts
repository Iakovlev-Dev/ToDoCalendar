import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./root-reducer.ts";

export const store = configureStore({
    reducer: rootReducer
})
