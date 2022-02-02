import React from "react"
import {Link} from "react-router-dom"

import menuOptions from "./MenuOptions.json"
import ModalMenu from "./ModalMenu"

export interface Option {
  title: string
  url: string
}

interface Props {}

const Menu: React.FC<Props> = ({}) => {
  return (
    <div>
      <ModalMenu menuOptions={menuOptions} />
      <nav className="hidden sm:block">
        <ul className="flex gap-2 text-lg font-medium">
          <li>
            <Link
              className="px-4 py-2 hover:text-pink-400 transition-colors duration-300"
              to="/login"
            >
              Log in
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-2 bg-pink-400 rounded-md hover:bg-pink-500 transition-colors duration-300 ease-in"
              to="/signup"
            >
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
