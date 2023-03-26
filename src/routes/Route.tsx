import React from 'react'
import Login from '../pages/Login';
import Top from '../pages/Top';

export default function Route() {
  const router = [
    {
      path: "/",
      element: <Top></Top>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
  ];

  return router
}
