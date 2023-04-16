

export type NewMeal = {
    time: number;
    foodCountList: Array<FoodCount>;
}

export type FoodCount = {
    id: number;
    count: number;
}