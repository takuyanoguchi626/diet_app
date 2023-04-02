import React, { useState } from 'react'
import { Food_calorie_new } from "../../types/Food_calorie"
import Material_symbols from "../icon/Material_symbols"

const Card_calorie_new = () => {
    const food_calories: Food_calorie_new[] = [
        {
            icon: "rice_bowl",
            text: "お茶碗１杯分",
            calorie: 343,
        },
        {
            icon: "rice_bowl",
            text: "お茶碗１杯分",
            calorie: 343,
        },
        {
            icon: "rice_bowl",
            text: "お茶碗１杯分",
            calorie: 343,
        },
    ]

    const [value, setValue] = useState(3)

    const inc_value = () => {
        setValue((val) => val + 1);
    }

    const dec_value = () => {
        setValue((val) => {
            if (val > 0) {
                return val - 1;
            } else {
                return val;
            }
        })
    }

    return (
        <div className="card card_table card_table_new">
            {food_calories.map((food_calorie, key) => {
                return (
                    <div key={key} className="l_flex card_item">
                        <div className="l_flex card_item_body">
                            <span className="material-symbols-rounded card_icon">{food_calorie.icon}</span>
                            <div className="ml_at text_right">
                                <div className="card_sub_text">{food_calorie.text}</div>
                                <div className="card_text">{food_calorie.calorie}kcal</div>
                            </div>
                        </div>
                        <div className="card_item_amount">
                            <button className="card_arrow" onClick={() => inc_value()}>
                                <Material_symbols name="expand_less"></Material_symbols>
                            </button>
                            <span className="card_number_text">{value}</span>
                            <button className="card_arrow" onClick={() => dec_value()}>
                                <Material_symbols name="expand_more"></Material_symbols>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>)
}

export default Card_calorie_new