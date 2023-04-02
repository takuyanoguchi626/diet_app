import React from 'react'
import { Calorie } from '../../types/Card'

const CardCalorie = (props: Calorie) => {
    return (
        <div className={"l_flex card card_default " + props.class_name}>
            <span className="material-symbols-rounded card_icon">{props.icon}</span>
            <div className='ml_12 card_text'>{props.title}</div>
            <div className='ml_at card_text'>{props.calorie}kcal</div>
        </div>
    )
}

export default CardCalorie