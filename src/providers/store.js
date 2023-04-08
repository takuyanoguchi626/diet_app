import { configureStore } from "@reduxjs/toolkit";
import NewMealSlice from "./slices/SliceNewMeal"

export const store = configureStore({
    reducer: {
        newMeal: NewMealSlice
    }
})