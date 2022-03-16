import {Outlet} from "react-router-dom"

import Navbar from "../navbar/Navbar"

import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="bg-stone-900 text-white flex flex-col h-full min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 flex-1 flex flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
