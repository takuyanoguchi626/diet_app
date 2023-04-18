import React from 'react'
import { FoodAmount } from "../../types/Card"


const CardFoodAmount = (props: FoodAmount) => {
    return (
        <div>
            <div>{props.amount}</div>
            <div>
                {/* <img src={"https://www.kikkoman.co.jp/homecook/search/recipe/img/00005991.jpg"} alt="" /> */}
                {/* <img src={"static/images/" + props.icon_url} alt="" /> */}
                <img src={require("../../../static/images/" + props.icon_url)} alt="" />
            </div>
            <p>{props.explanation}</p>
            <p>{props.calorie}</p>
        </div>
    )
}

export default CardFoodAmount