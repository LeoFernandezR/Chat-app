import {Icon} from "@iconify/react"
import React from "react"

import SignUpForm from "../components/forms/SignUpForm"

interface Props {}

const SignUp: React.FC<Props> = ({}) => {
  return (
    <div className="flex justify-center items-center flex-1">
      <div className="relative max-w-xl w-full">
        <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 blur" />
        <div className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-center rounded-md p-6">
          <h1 className="text-4xl font-medium mb-6">
            Register for Chatter <Icon inline className="inline" icon="mdi:file-sign" />
          </h1>
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}

export default SignUp
