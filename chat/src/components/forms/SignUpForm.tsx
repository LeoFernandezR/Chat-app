import React from "react"

import TextField from "../../ui/form/TextField"
interface Props {}

const SignUpForm: React.FC<Props> = ({}) => {
  return (
    <form className="flex flex-col gap-2 px-2">
      <TextField placeholder="username" type="text" />
      <TextField placeholder="email" type="email" />
      <TextField password placeholder="password" />
      <TextField password placeholder="confirm password" />
      <button
        className="bg-pink-400 hover:bg-pink-500 focus:bg-pink-500 outline-none transition-colors duration-300 ease-in rounded-md py-2 px-4 mt-4 text-xl"
        type="submit"
      >
        Sign up
      </button>
    </form>
  )
}

export default SignUpForm
