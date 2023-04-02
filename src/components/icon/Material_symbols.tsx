import React from 'react'
import { Material_symbols } from "../../types/icon"

const Material_symbols = (props: Material_symbols) => {
    return (
        <span className="material-symbols-rounded">{props.name}</span>
    )
}

export default Material_symbols