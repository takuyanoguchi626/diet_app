import { createSlice } from "@reduxjs/toolkit";


export const NewMealSlice = createSlice({
    name: "newMeal",
    initialState: {
        breakfast: {},
        lunch: {},
        dinner: {},
    },
    reducers: {
        setReduxFoodCountList: (state, action) => {
            if (action.payload.time === 1) {
                state.breakfast = action.payload;
                return;
            }
            if (action.payload.time === 2) {
                state.lunch = action.payload;
                return;
            }
            if (action.payload.time === 3) {
                state.dinner = action.payload;
                return;
            }
            // if (action.payload.time === 2) return state.lunch = action.payload;
            // if (action.payload.time === 3) return state.dinner = action.payload;
        }
    }
})

export const { increment, decrement, setReduxFoodCountList } = NewMealSlice.actions;
export default NewMealSlice.reducer;