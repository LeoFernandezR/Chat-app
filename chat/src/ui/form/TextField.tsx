import {Icon} from "@iconify/react"
import React, {forwardRef, ForwardRefRenderFunction, useState} from "react"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  password?: boolean
  error?: string
}

type ITextField = ForwardRefRenderFunction<HTMLInputElement, Props>

const TextField: ITextField = ({type, password, error, ...props}, ref) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const buttonIcon = showPassword ? (
    <Icon inline className="inline " icon="mdi:eye-off-outline" />
  ) : (
    <Icon inline className="inline" icon="mdi:eye-outline" />
  )

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="relative">
      {password ? (
        <div className="relative">
          <input
            ref={ref}
            className="relative p-2 px-4 w-full rounded-md bg-stone-700/30 text-white font-light text-xl placeholder:text-white/70 outline-none focus:ring focus:ring-pink-400 transition-all ease-in duration-300"
            type={showPassword ? "text" : "password"}
            {...props}
          />
          <button
            className="absolute top-0 bottom-0 right-4 text-2xl outline-none hover:text-pink-400 transition-colors ease-in duration-300 focus:text-pink-400"
            type="button"
            onClick={toggleShowPassword}
          >
            {buttonIcon}
          </button>
        </div>
      ) : (
        <div className="relative">
          <input
            ref={ref}
            className="relative p-2 px-4 w-full rounded-md bg-stone-700/30 text-white font-light text-xl placeholder:text-white/70 outline-none focus:ring focus:ring-pink-400 transition-all ease-in duration-300"
            type={type}
            {...props}
          />
        </div>
      )}
      {error && <p className="text-rose-200 text-left m-0">{error}</p>}
    </div>
  )
}

export default forwardRef(TextField)
