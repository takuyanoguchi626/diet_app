import React from 'react'
import { FoodCalorieTable } from "../../types/FoodCalorie"

const CardCalorieTable = () => {
    const food_calories: FoodCalorieTable[] = [
        {
            name: "rice",
            icon: "rice_bowl",
            text: "お茶碗１杯分",
            calorie: 343,
            amount: 2
        },
        {
            name: "rice",
            icon: "rice_bowl",
            text: "お茶碗１杯分",
            calorie: 343,
            amount: 2
        },
        {
            name: "rice",
            icon: "rice_bowl",
            text: "お茶碗１杯分",
            calorie: 343,
            amount: 2
        },
    ]

    return (
        <div className="card card_table">
            {food_calories.map((food_calorie, index) => {
                return (
                    <div key={index} className="l_flex card_item">
                        <div className="l_flex card_item_body">
                            <span className="material-symbols-rounded card_icon">{food_calorie.icon}</span>
                            <div className="ml_at text_right">
                                <div className="card_sub_text">{food_calorie.text}</div>
                                <div className="card_text">{food_calorie.calorie}kcal</div>
                            </div>
                        </div>
                        <div className="card_item_amount">{food_calorie.amount}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardCalorieTable