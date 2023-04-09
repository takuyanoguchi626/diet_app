import React from 'react'
import { Button } from "../../types/Button"

const Button = (props: Button) => {
    return (
        <button
            className={"button " + props.className}
            type={props.type}
            onClick={props.onclick}
            disabled={props.disabled}
        >{props.children}</button>
    )
}

export default Button