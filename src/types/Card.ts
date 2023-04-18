export type Calorie = {
    icon: string;
    title: string;
    calorie: number;
    class_name?: string;
}

export type BodyWeight = {
    icon: string;
    title: string;
    bodyWeight: number;
    class_name?: string;
}

export type FoodAmount = {
    amount: number,
    icon_url: string,
    explanation: string,
    calorie: number
}