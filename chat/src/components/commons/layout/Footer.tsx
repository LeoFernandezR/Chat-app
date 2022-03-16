import React from "react"
interface Props {
  textColor?: string
  emoji?: string
}

const Footer: React.FC<Props> = ({textColor = "text-stone-300", emoji = "👾"}) => {
  const year = new Date().getFullYear()

  return (
    <footer className={`flex justify-center items-center py-4 ${textColor} text-center`}>
      <p>
        Leonardo Fernández {emoji} | &copy; {year}
      </p>
    </footer>
  )
}

export default Footer
