import React from 'react'
import Login from '../pages/Login';
import Top from '../pages/Top';
import Plan_meal from "../pages/Plan_meal"

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
  ];

  return router
}
