import React from 'react'
import { Navbarr } from '../Navbar/Navbarr'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <Navbarr/>
        <Outlet/>
        <Footer/>
    </>
  )
}
