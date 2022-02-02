import React, {useState} from "react"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  password?: boolean
}

const TextField: React.FC<Props> = ({className, type, password, ...props}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div>
      {password ? (
        <>
          <input
            className={`p-2 px-4 w-full rounded-md bg-stone-700/30 text-white font-light text-xl placeholder:text-white/70 outline-none  ${className}`}
            type={showPassword ? "text" : "password"}
            {...props}
          />
          <button onClick={toggleShowPassword} />
        </>
      ) : (
        <input
          className={`p-2 px-4 w-full rounded-md bg-stone-700/30 text-white font-light text-xl placeholder:text-white/70 outline-none  ${className}`}
          type={type}
          {...props}
        />
      )}
    </div>
  )
}

export default TextField
