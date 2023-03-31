import React from 'react'

const Card_calorie_table = () => {
    const food_calories = [
        {
            icon: "rice_bowl",
            text: "お茶碗１杯分",
            calorie: 343,
            amount: 2
        },
        {
            icon: "rice_bowl",
            text: "お茶碗１杯分",
            calorie: 343,
            amount: 2
        },
        {
            icon: "rice_bowl",
            text: "お茶碗１杯分",
            calorie: 343,
            amount: 2
        },
    ]

    return (
        <div className="card card_calorie_table">
            {food_calories.map((food_calorie) => {
                return (
                    <div className="l_flex food_calorie">
                        <div className="l_flex food_calorie_body">
                            <span className="material-symbols-rounded card_icon">{food_calorie.icon}</span>
                            <div className="ml_at text_right">
                                <div className="card_sub_text">{food_calorie.text}</div>
                                <div className="card_text">{food_calorie.calorie}kcal</div>
                            </div>
                        </div>
                        <div className="food_calorie_amount">{food_calorie.amount}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card_calorie_table