import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../pages/Navbar'

const Layout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout