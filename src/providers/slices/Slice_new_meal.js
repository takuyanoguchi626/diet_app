import { createSlice } from "@reduxjs/toolkit";


export const New_meal_slice = createSlice({
    name: "new_meal",
    initialState: {
        breakfast: {},
        lunch: {},
        dinner: {},
        value: 1
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})

export const { increment, decrement } = New_meal_slice.actions;
export default New_meal_slice.reducer;