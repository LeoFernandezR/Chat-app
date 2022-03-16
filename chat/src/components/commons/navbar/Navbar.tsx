import React from "react"
import {InlineIcon} from "@iconify/react"
import {Link} from "react-router-dom"

import ChatterLogo from "../../../assets/logo/logo.png"

import Menu from "./Menu/Menu"
interface Props {}

const Navbar: React.FC<Props> = ({}) => {
  return (
    <header className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow relative w-full">
      <div className="absolute bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur w-full h-full" />

      <div className="flex items-center justify-between px-6 py-4 relative">
        <Link to="/">
          <div className="flex items-stretch">
            <div className="w-10 mr-1">
              <img className="w-full" src={ChatterLogo} />
            </div>
            <h1 className="text-3xl font-medium">Chatter </h1>
          </div>
        </Link>
        <Menu />
      </div>
    </header>
  )
}

export default Navbar
