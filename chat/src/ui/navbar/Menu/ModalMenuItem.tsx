import React from "react"
import {Link} from "react-router-dom"
interface Props {
  title: string
  url: string
}

const ModalMenuItem: React.FC<Props> = ({title, url}) => {
  return (
    <Link to={url}>
      <li className="w-full py-4 mb-[3px] last:mb-0 bg-stone-800 group hover:bg-transparent transition-colors duration-300 cursor-pointer ease-in">
        {title}
      </li>
    </Link>
  )
}

export default ModalMenuItem
