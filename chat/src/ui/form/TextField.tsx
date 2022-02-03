import {Icon} from "@iconify/react"
import React, {useState} from "react"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  password?: boolean
}

const TextField: React.FC<Props> = ({className, type, password, ...props}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const buttonIcon = showPassword ? (
    <Icon inline className="inline" icon="mdi:eye-outline" />
  ) : (
    <Icon inline className="inline" icon="mdi:eye-off-outline" />
  )

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="relative">
      {password ? (
        <>
          <input
            className={`relative p-2 px-4 w-full rounded-md bg-stone-700/30 text-white font-light text-xl placeholder:text-white/70 outline-none focus:ring focus:ring-pink-400 transition-all ease-in duration-300  ${className}`}
            type={showPassword ? "text" : "password"}
            {...props}
          />
          <button
            className="absolute top-0 bottom-0 right-4 text-2xl outline-none hover:text-pink-400 focus:text-pink-400 transition-colors ease-in duration-300"
            type="button"
            onClick={toggleShowPassword}
          >
            {buttonIcon}
          </button>
        </>
      ) : (
        <input
          className={`relative p-2 px-4 w-full rounded-md bg-stone-700/30 text-white font-light text-xl placeholder:text-white/70 outline-none focus:ring focus:ring-pink-400 transition-all ease-in duration-300  ${className}`}
          type={type}
          {...props}
        />
      )}
    </div>
  )
}

export default TextField
