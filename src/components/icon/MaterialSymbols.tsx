import React from 'react'
import { MaterialSymbols } from "../../types/Icon"

const MaterialSymbols = (props: MaterialSymbols) => {
    return (
        <span className="material-symbols-rounded">{props.name}</span>
    )
}

export default MaterialSymbols