import { createBrowserRouter, RouterProvider } from "react-router"

import Layout from "./Layout/Layout"
import Home from "./pages/Home"
import Countries from "./pages/Countries"
import AboutUs from "./pages/AboutUs"

const router= createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/countries",
        element: <Countries />
      },
      {
        path: "/about",
        element: <AboutUs />
      }
    ]
  }
])
function App() {

  return (
    <RouterProvider router={router} />
    )
}

export default App
