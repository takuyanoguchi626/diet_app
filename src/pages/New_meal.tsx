import React from 'react'
import Layout from "../components/Layout.tsx/Layout"
import Card_calorie_new from "../components/card/Card_calorie_new"
import { Food_calorie_new } from "../types/Food_calorie"

const New_meal = () => {
    // 仮のデータ。fetchで持ってくる。
    const food_calories: Food_calorie_new[] = [
        {
            name: "rice",
            icon: "rice_bowl",
            text: "お茶碗１杯分",
            calorie: 343,
        },
        {
            name: "rice",
            icon: "rice_bowl",
            text: "お茶碗１杯分",
            calorie: 343,
        },
        {
            name: "rice",
            icon: "rice_bowl",
            text: "お茶碗１杯分",
            calorie: 343,
        },
    ]

    return (
        <Layout>
            <div className='pt_24 pr_16 pl_16 pb_90 l_layout'>
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
                <Card_calorie_new food_calorie_new_arr={food_calories}></Card_calorie_new>
            </div>
        </Layout>)
}

export default New_meal