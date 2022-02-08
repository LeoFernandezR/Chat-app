import React from "react"
import {InlineIcon} from "@iconify/react"
import {Link} from "react-router-dom"

import Menu from "./Menu/Menu"
interface Props {}

const Navbar: React.FC<Props> = ({}) => {
  return (
    <header className=" bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow relative w-full">
      <div className="absolute bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur w-full h-full" />

      <div className="flex items-center justify-between px-6 py-2 relative">
        <Link to="/">
          <h1 className="text-3xl py-2 pr-4">
            <InlineIcon className="inline mr-2 text-blue-400" icon="mdi:react" />
            Chatter
          </h1>
        </Link>
        <Menu />
      </div>
    </header>
  )
}

export default Navbar
