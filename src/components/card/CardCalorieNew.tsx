import React, { useEffect, useState } from 'react'
import { FoodCalorieNew } from "../../types/FoodCalorie"
import MaterialSymbols from "../icon/MaterialSymbols"
import { FoodCount, NewMeal } from "../../types/NewMeal"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { decrement, increment, setReduxFoodCountList } from "../../providers/slices/SliceNewMeal"

type props = {
    foodCalorieNewArr: FoodCalorieNew[],
    time: number
}

const CardCalorieNew = (props: props) => {
    const dispatch = useDispatch();

    const initialFoodCountList: FoodCount[] = [];
    props.foodCalorieNewArr.forEach((foodCalorie) => {
        initialFoodCountList.push({
            id: foodCalorie.id,
            count: 0
        });
    });

    const [newMeal, setNewMeal] = useState<NewMeal>({
        time: props.time,
        foodCountList: initialFoodCountList
    });

    // {
    //     time: 1,
    //         foodCountList: [
    //         {
    //             id: 1,
    //                 count: 2
    //         },
    //         {
    //             id: 2,
    //                 count: 4
    //         }
    //     ]
    // }



    return (
        <div className="card card_table card_table_new">
            {props.foodCalorieNewArr.map((foodCalorie, key) => {
                const foodCount = newMeal.foodCountList.find((foodCount) => foodCount.id === foodCalorie.id);
                console.log("foodCount", foodCount);

                return (
                    <div key={key} className="l_flex card_item">
                        <div className="l_flex card_item_body">
                            <span className="material-symbols-rounded card_icon">{foodCalorie.icon}</span>
                            <div className="ml_at text_right">
                                <div className="card_sub_text">{foodCalorie.text}</div>
                                <div className="card_text">{foodCalorie.calorie}kcal</div>
                            </div>
                        </div>
                        <div className="card_item_amount">
                            <button className="card_arrow" onClick={() => {
                                for (let i = 0; i < newMeal.foodCountList.length; i++) {
                                    if (newMeal.foodCountList[i].id === foodCalorie.id) {
                                        const foodCountList2 = [...newMeal.foodCountList];
                                        foodCountList2[i].count++
                                        const newMeal2 = {
                                            time: newMeal.time,
                                            foodCountList: foodCountList2
                                        }
                                        setNewMeal(() => newMeal2);
                                    }
                                }
                            }}>
                                <MaterialSymbols name="expand_less"></MaterialSymbols>
                            </button>
                            <span className="card_number_text">{(() => {
                                return newMeal.foodCountList.filter((foodCount) => foodCount.id === foodCalorie.id)[0].count;
                            })()}</span>
                            {(() => {
                                if (newMeal.foodCountList.filter((foodCount) => foodCount.id === foodCalorie.id)[0].count > 0) {
                                    return (
                                        <button className="card_arrow" onClick={() => {
                                            for (let i = 0; i < newMeal.foodCountList.length; i++) {
                                                if (newMeal.foodCountList[i].id === foodCalorie.id) {
                                                    const foodCountList2 = [...newMeal.foodCountList];
                                                    foodCountList2[i].count--
                                                    const newMeal2 = {
                                                        time: newMeal.time,
                                                        foodCountList: foodCountList2
                                                    }
                                                    setNewMeal(() => newMeal2);
                                                }
                                            }
                                        }}>
                                            <MaterialSymbols name="expand_more"></MaterialSymbols>
                                        </button>
                                    )
                                }
                            })()}
                        </div>
                    </div>
                )
            })}
        </div>)
}

export default CardCalorieNew