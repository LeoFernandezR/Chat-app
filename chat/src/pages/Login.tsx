import {Icon} from "@iconify/react"
import React from "react"

import LoginForm from "../components/forms/LoginForm"

interface Props {}

const Login: React.FC<Props> = ({}) => {
  return (
    <div className="flex justify-center items-center flex-1">
      <div className="relative max-w-xl w-full">
        <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 blur" />
        <div className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-center rounded-md p-4 sm:p-6">
          <h1 className="text-4xl mb-4 ">
            Enter your account <Icon inline className="inline" icon="mdi:login" />
          </h1>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
