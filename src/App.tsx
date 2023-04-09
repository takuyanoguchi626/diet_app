import React from 'react'
import Route from "./routes/Route"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./providers/store"

const App = () => {
  const router = createBrowserRouter(Route());

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App;
