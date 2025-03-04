import { createBrowserRouter, RouterProvider } from "react-router"

import Layout from "./Layout/Layout"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import CountryDetail from "./components/CountryDetail"
import { createContext, useEffect, useReducer } from "react"
import { client } from "../lib/axios"
import Countries from "./pages/Countries"
import { initialState, reducer } from "../lib/reducer"
import axios from "axios"

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

  const [state, dispatch]= useReducer(reducer, initialState)

  const getData= async () => {
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        const { data } = res;        
        dispatch({type:"SET_COUNTRIES", payload: data})
      } catch (error) {
         console.log(error);
      }
  }

  useEffect(()=> {
    getData();
  },[])

  return (
    <CountriesContext.Provider value={{state, dispatch}}>
      <RouterProvider router={router} />
    </CountriesContext.Provider>
    )
}

export default App
