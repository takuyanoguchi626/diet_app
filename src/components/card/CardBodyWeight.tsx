import React from 'react'
import { BodyWeight } from "../../types/Card"

const CardBodyWeight = (props: BodyWeight) => {
    return (
        <div className={"l_flex card card_calorie " + props.class_name}>
            <span className="material-symbols-rounded card_icon">{props.icon}</span>
            <div className='ml_12 card_text'>{props.title}</div>
            <div className='ml_at card_text'>{props.bodyWeight}kcal</div>
        </div>
    )
}

export default CardBodyWeight