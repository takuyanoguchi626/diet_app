import React from 'react'
import Layout from "../components/Layout.tsx/Layout"
import CalendarComp from "../components/calendar/CalendarComp"
import CardCalorie from "../components/card/CardCalorie"
import CardBodyWeight from "../components/card/CardBodyWeight"
import Button from "../components/button/Button"


const Calendar = () => {
    return (
        <Layout header={{ has_back_button: false, title: "カレンダー" }}>
            <div className='pb_90 l_layout'>
                <CalendarComp></CalendarComp>
                <div className="pl_16 pr_16">
                    <CardCalorie icon={"restaurant"} title={"食事"} calorie={3000} class_name="mt_24"></CardCalorie>
                    <CardCalorie icon={"restaurant"} title={"運動"} calorie={3000} class_name="mt_8"></CardCalorie>
                    <CardBodyWeight icon="restaurant" title="体重" bodyWeight={50} class_name="mt_8"></CardBodyWeight>
                    <Button className="mt_8 radius">詳細を見る</Button>
                    <div className="mt_8 l_flex gap_8">
                        <Button className="radius outline accent">計画を立てる</Button>
                        <Button className="radius accent">記録を付ける</Button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Calendar