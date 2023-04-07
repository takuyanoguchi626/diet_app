import { createSlice } from "@reduxjs/toolkit";


export const NewMealSlice = createSlice({
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

export const { increment, decrement } = NewMealSlice.actions;
export default NewMealSlice.reducer;