import {Outlet} from "react-router-dom"

import Navbar from "../navbar/Navbar"

import Footer from "./Footer"

const LayoutChat = () => {
  return (
    <div className="bg-stone-900 text-white flex flex-col h-full min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default LayoutChat
