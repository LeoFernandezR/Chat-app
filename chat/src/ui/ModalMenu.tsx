import {Icon} from "@iconify/react"
import React, {useState} from "react"

import ModalMenuItem from "./ModalMenuItem"

interface Props {
  menuOptions: string[]
}

const ModalMenu: React.FC<Props> = ({menuOptions}) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const iconMenu = toggleMenu ? <Icon icon="mdi:close" /> : <Icon icon="mdi:menu" />

  return (
    <div className="sm:hidden">
      <button className="text-4xl align-text-bottom" onClick={() => setToggleMenu(!toggleMenu)}>
        {iconMenu}
      </button>
      <nav
        className={`absolute bg-opacity-25 w-full top-full left-0 flex justify-center items-center transition-all origin-top duration-300 ${
          toggleMenu ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <ul className="text-center w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          {menuOptions.map((option) => (
            <ModalMenuItem key={option} option={option} />
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default ModalMenu
