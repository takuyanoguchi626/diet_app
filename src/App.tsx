import React from 'react'
import Route from "./routes/Route"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const App = () => {
  const router = createBrowserRouter(Route())

  return (
    <RouterProvider router={router} />
  )
}

export default App
