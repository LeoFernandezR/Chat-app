import React from "react"
import {Link} from "react-router-dom"

interface Props {
  title: string
  url?: string
  action: "button" | "link"
  onClick: VoidFunction
}

const ModalMenuItem: React.FC<Props> = ({title, url = "/", action, onClick}) => {
  const isLink = action === "link"

  return (
    <>
      {isLink ? (
        <Link to={url} onClick={onClick}>
          <li className="w-full py-4 mb-[3px] last:mb-0 bg-stone-800 group hover:bg-transparent transition-colors duration-300 cursor-pointer ease-in block">
            {title}
          </li>
        </Link>
      ) : (
        <li className="w-full py-4 mb-[3px] last:mb-0 bg-stone-800 group hover:bg-transparent transition-colors duration-300 cursor-pointer ease-in block">
          <button className="w-full" onClick={onClick}>
            {title}
          </button>
        </li>
      )}
    </>
  )
}

export default ModalMenuItem
