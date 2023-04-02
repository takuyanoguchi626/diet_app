import React from 'react'
import Login from '../pages/Login';
import Top from '../pages/Top';
import Plan_meal from "../pages/Plan_meal"
import New_meal from "../pages/New_meal"
import New_exercise from "../pages/New_exercise"
import New_body_weight from "../pages/New_body_weight"
import Calendar from "../pages/Calendar"
import Mypage from "../pages/Mypage"

export default function Route() {
  const router = [
    {
      path: "/",
      element: <Top></Top>,
    },
    {
      path: "login",
      element: <Login></Login>,
    },
    {
      path: "/plan_meal",
      element: <Plan_meal></Plan_meal>,
    },
    {
      path: "/new_meal",
      element: <New_meal></New_meal>,
    },
    {
      path: "/new_exercise",
      element: <New_exercise></New_exercise>,
    },
    {
      path: "/new_body_weight",
      element: <New_body_weight></New_body_weight>,
    },
    {
      path: "/calendar",
      element: <Calendar></Calendar>,
    },
    {
      path: "/mypage",
      element: <Mypage></Mypage>,
    },
  ];

  return router
}
