import { createSlice } from "@reduxjs/toolkit";


export const NewMealSlice = createSlice({
    name: "newMeal",
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
        },
        setReduxFoodCountList: (state, action) => {
            if (action.payload.time === 1) {
                state.breakfast = action.payload;
            } else if (action.payload.time === 2) {
                state.lunch = action.payload;
            } else {
                state.dinner = action.payload;
            }
        }
    }
})

export const { increment, decrement, setReduxFoodCountList } = NewMealSlice.actions;
export default NewMealSlice.reducer;