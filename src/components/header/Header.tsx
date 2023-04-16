import React from 'react'
import { Header as HeaderProps } from "../../types/Header"

const Header = (props: HeaderProps) => {
  return (
    <div className='pr_16 pl_16 header'>
      {(() => {
        if (props.has_back_button) return <span className="material-symbols-rounded mr_12 header_icon">arrow_back_ios</span>
      })()}
      <h1 className="header_title">{props.title}</h1>
    </div>
  )
}

export default Header
