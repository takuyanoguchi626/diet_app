import React, { useState } from 'react'
import { Food_calorie_new } from "../../types/Food_calorie"
import Material_symbols from "../icon/Material_symbols"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { decrement, increment } from "../../providers/slices/Slice_new_meal"

type props = {
    food_calorie_new_arr: Food_calorie_new[]
}

const Card_calorie_new = (props: props) => {
    const value = useSelector((state: any) => state.new_meal.value)
    const dispatch = useDispatch()
    // const [value, setValue] = useState(3)

    // const inc_value = () => {
    //     setValue((val) => val + 1);
    // }

    // const dec_value = () => {
    //     setValue((val) => {
    //         if (val > 0) {
    //             return val - 1;
    //         } else {
    //             return val;
    //         }
    //     })
    // }

    return (
        <div className="card card_table card_table_new">
            {props.food_calorie_new_arr.map((food_calorie, key) => {
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
                            <button className="card_arrow" onClick={() => dispatch(increment())}>
                                <Material_symbols name="expand_less"></Material_symbols>
                            </button>
                            <span className="card_number_text">{value}</span>
                            <button className="card_arrow" onClick={() => dispatch(decrement())}>
                                <Material_symbols name="expand_more"></Material_symbols>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>)
}

export default Card_calorie_new