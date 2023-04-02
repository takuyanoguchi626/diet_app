import { configureStore } from "@reduxjs/toolkit";
import New_meal_reducer from "./slices/Slice_new_meal"

export const store = configureStore({
    reducer: {
        new_meal: New_meal_reducer
    }
})