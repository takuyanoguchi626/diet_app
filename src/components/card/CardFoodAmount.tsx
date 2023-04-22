import React from 'react'
import { FoodAmount } from "../../types/Card"


const CardFoodAmount = (props: FoodAmount) => {
    return (
        <div className="l_flex l_flex_column l_align_center card card_food card_food_amount">
            <div className="card_amount">{props.amount}</div>
            <div className="card_img_wrapper">
                <img className="card_img" src="./assets/images/rice.svg" alt="" />
            </div>
            <p className="mt_8 card_title">{props.explanation}</p>
            <p className="card_text">{props.calorie}kcal</p>
        </div>
    )
}

export default CardFoodAmount