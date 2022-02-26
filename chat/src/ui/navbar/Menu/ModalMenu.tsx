import {Icon} from "@iconify/react"
import React, {useState} from "react"

import useAuthContext from "../../../hooks/useAuthContext"

import ModalMenuItem from "./ModalMenuItem"

interface Props {}

const ModalMenu: React.FC<Props> = () => {
  const {logout, user} = useAuthContext()
  const [showMenu, setShowMenu] = useState(false)
  const iconMenu = showMenu ? <Icon icon="mdi:close" /> : <Icon icon="mdi:menu" />

  const closeMenu = () => setShowMenu(false)

  const handleLogout = () => {
    closeMenu()
    //Waiting till the menu animation end to logout
    //Check the nav element to see the animation code
    setTimeout(logout, 300)
  }

  return (
    <div className="sm:hidden flex items-center gap-2 text-lg">
      {user && (
        <p>
          Hello, <span className="text-pink-300 font-medium">{user?.username}</span> 👋
        </p>
      )}

      <button className="text-4xl align-text-bottom" onClick={() => setShowMenu(!showMenu)}>
        {iconMenu}
      </button>
      <nav
        className={`absolute bg-opacity-25 w-full top-full left-0 flex justify-center items-center transition-all origin-top duration-300 ${
          showMenu ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <ul className="text-center w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          {user ? (
            <ModalMenuItem action="button" title="Logout" url="/" onClick={handleLogout} />
          ) : (
            <>
              <ModalMenuItem action="link" title="Login" url="/login" onClick={closeMenu} />
              <ModalMenuItem action="link" title="Sign up" url="/signup" onClick={closeMenu} />
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default ModalMenu
