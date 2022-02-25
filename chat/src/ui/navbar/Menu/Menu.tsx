import React from "react"
import {Link} from "react-router-dom"

import useAuthContext from "../../../hooks/useAuthContext"

import ModalMenu from "./ModalMenu"

interface Props {}

const Menu: React.FC<Props> = ({}) => {
  const {loggedIn, user, logout} = useAuthContext()

  return (
    <div>
      <ModalMenu />
      <nav className="hidden sm:block">
        <ul className="flex gap-2 text-xl items-center">
          {loggedIn ? (
            <>
              <li>
                <p className="mr-2">
                  Hello, <span className="text-pink-300 font-medium ">{user?.username}</span>👋
                </p>
              </li>
              <li>
                <button
                  className="px-4 py-1 bg-pink-400 rounded-md hover:bg-pink-500 transition-colors duration-300 ease-in "
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  className="px-4 py-1 hover:text-pink-400 transition-colors duration-300"
                  to="/login"
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  className="block px-4 py-1 bg-pink-400 rounded-md hover:bg-pink-500 transition-colors duration-300 ease-in"
                  to="/signup"
                >
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Menu
