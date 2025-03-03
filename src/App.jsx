import { createBrowserRouter, RouterProvider } from "react-router"

import Layout from "./Layout/Layout"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import CountryDetail from "./components/CountryDetail"
import { createContext, useEffect, useState } from "react"
import { client } from "../lib/axios"
import Countries from "./pages/Countries"

const router= createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/countries",
        element: <Countries />,
      },
      {
        path: "/countries/:common",
        element: <CountryDetail />,
      },
      {
        path: "/about",
        element: <AboutUs />
      },

    ]
  }
])

export const CountriesContext = createContext(null);

function App() {

  const [countries, setCountries] = useState([]);

  const getData= async () => {
      try {
        const res = await client.get("/all");
        const { data } = res;
        setCountries(data)
      } catch (error) {
         console.log(error);
      }
  }

  useEffect(()=> {
    getData();
    
  })

  return (
    <CountriesContext.Provider value={{countries, setCountries}}>
      <RouterProvider router={router} />
    </CountriesContext.Provider>
    )
}

export default App
