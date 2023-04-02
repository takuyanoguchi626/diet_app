import React from 'react'
import { NavLink } from "react-router-dom"

const Navi_bottom = () => {
  return (
    <div className='navi navi_bottom'>
      <NavLink className="navi_item" to={"/"}>
        <span className="material-symbols-rounded navi_icon">home</span>
        <p className="navi_text">ホーム</p>
      </NavLink>
      <NavLink className="navi_item" to={"/new_meal"}>
        <span className="material-symbols-rounded navi_icon">edit_square</span>
        <p className="navi_text">入力</p>
      </NavLink>
      <NavLink className="navi_item" to={"/calendar"}>
        <span className="material-symbols-rounded navi_icon">calendar_month</span>
        <p className="navi_text">カレンダー</p>
      </NavLink>
      <NavLink className="navi_item" to={"/mypage"}>
        <span className="material-symbols-rounded navi_icon">person</span>
        <p className="navi_text">マイページ</p>
      </NavLink>
    </div>
  )
}

export default Navi_bottom