import React, { useEffect } from 'react'
import Layout from "../components/Layout.tsx/Layout"
import CardCalorieNew from "../components/card/CardCalorieNew"
import { FoodCalorieNew } from "../types/FoodCalorie"
import { useSelector } from "react-redux"
import Button from "../components/button/Button"

const NewMeal = () => {
    // 仮のデータ。fetchで持ってくる。
    const food_calories: FoodCalorieNew[] = [
        {
            id: 1,
            icon: "rice_bowl",
            text: "お茶碗１杯分",
            calorie: 343,
        },
        {
            id: 2,
            icon: "rice_bowl",
            text: "お茶碗１杯分",
            calorie: 343,
        },
        {
            id: 3,
            icon: "rice_bowl",
            text: "お茶碗１杯分",
            calorie: 343,
        },
    ]

    const breakfast = useSelector((state: any) => state.newMeal.breakfast);
    const lunch = useSelector((state: any) => state.newMeal.lunch);
    const dinner = useSelector((state: any) => state.newMeal.dinner);
    const state = {
        breakfast,
        lunch,
        dinner
    }

    console.log(state);


    return (
        <Layout header={{ has_back_button: false, title: "記録を付ける" }}>
            <div className="l_flex">
                <p>日付</p>
                <div className="ml_at">
                    <input type="date" />
                </div>
            </div>
            <div className="l_flex">
                <p>項目</p>
                <div className="ml_at">
                    <select name="kinds" id="">
                        <option value="meal">食事</option>
                        <option value="exercize">運動</option>
                        <option value="body_weight">体重</option>
                    </select>
                </div>
            </div>
            <div className="title_24 text_center">あさ</div>
            <CardCalorieNew foodCalorieNewArr={food_calories} time={1}></CardCalorieNew>
            <div className="title_24 text_center">ひる</div>
            <CardCalorieNew foodCalorieNewArr={food_calories} time={2}></CardCalorieNew>
            <div className="title_24 text_center">よる</div>
            <CardCalorieNew foodCalorieNewArr={food_calories} time={3}></CardCalorieNew>
            <div>
                <Button className="mt_24 radius" onclick={() => console.log(state)}>食事の記録を付ける</Button>
            </div>
        </Layout>)
}

export default NewMeal