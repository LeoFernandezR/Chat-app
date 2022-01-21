import React from "react"
import {InlineIcon} from "@iconify/react"
interface Props {}

const Footer: React.FC<Props> = ({}) => {
  const year = new Date().getFullYear()

  return (
    <footer className="flex justify-center items-center py-4 text-stone-300 font-light text-center">
      <p>
        Leonardo Fernández <InlineIcon className="inline" icon="noto:alien-monster" /> | &copy;{" "}
        {year}
      </p>
    </footer>
  )
}

export default Footer
