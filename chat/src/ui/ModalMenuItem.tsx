import React from "react"
interface Props {
  option: string
}

const ModalMenuItem: React.FC<Props> = ({option}) => {
  return (
    <li className="w-full py-4 mb-[3px] last:mb-0 bg-stone-800 group hover:bg-transparent transition-colors duration-300 cursor-pointer ease-in">
      {option}
    </li>
  )
}

export default ModalMenuItem
