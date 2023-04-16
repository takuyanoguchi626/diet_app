import React from 'react'
import Login from '../pages/Login';
import Home from '../pages/Home';
import PlanMeal from "../pages/PlanMeal"
import NewMeal from "../pages/NewMeal"
import NewExercise from "../pages/NewExercise"
import NewBodyWeight from "../pages/NewBodyWeight"
import Calendar from "../pages/Calendar"
import Mypage from "../pages/Mypage"

export default function Route() {
  const router = [
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "login",
      element: <Login></Login>,
    },
    {
      path: "/plan_meal",
      element: <PlanMeal></PlanMeal>,
    },
    {
      path: "/new_meal",
      element: <NewMeal></NewMeal>,
    },
    {
      path: "/new_exercise",
      element: <NewExercise></NewExercise>,
    },
    {
      path: "/new_body_weight",
      element: <NewBodyWeight></NewBodyWeight>,
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
