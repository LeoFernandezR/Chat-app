import React, {useState} from "react"
import {SubmitHandler, useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {Icon} from "@iconify/react"

import TextField from "../../ui/form/TextField"
import api from "../../api"
import useAuthContext from "../../hooks/useAuthContext"

interface ISignUpFormInputs {
  username: string
  email: string
  password: string
  confirmPassword: string
}

const schema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required(),
})

interface Props {}

const SignUpForm: React.FC<Props> = ({}) => {
  const {saveToken} = useAuthContext()

  const {
    register,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm<ISignUpFormInputs>({
    resolver: yupResolver(schema),
  })

  const [submitting, setSubmitting] = useState(false)

  const onSubmit: SubmitHandler<ISignUpFormInputs> = async (data) => {
    setSubmitting(true)
    try {
      const {token} = await api.signup(data)

      saveToken(token)

      setSubmitting(false)
    } catch (error) {
      const errorMessage = (error as Error).message

      setSubmitting(false)

      if (errorMessage.includes("username")) {
        return setError("username", {type: "manual", message: errorMessage})
      }

      if (errorMessage.includes("email")) {
        return setError("email", {type: "manual", message: errorMessage})
      }
    }
  }

  const submit = submitting ? (
    <Icon inline className="inline animate-spin" icon="mdi:loading" />
  ) : (
    "Sign up"
  )

  return (
    <form className="flex flex-col gap-2 px-2" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        placeholder="username"
        type="text"
        {...register("username")}
        error={errors.username?.message}
      />
      <TextField
        placeholder="email"
        type="email"
        {...register("email")}
        error={errors.email?.message}
      />
      <TextField
        password
        placeholder="password"
        {...register("password")}
        error={errors.password?.message}
      />
      <TextField
        password
        placeholder="confirm password"
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />
      <button
        className="bg-pink-400 hover:bg-pink-500 focus:bg-pink-500 outline-none transition-colors duration-300 ease-in rounded-md py-2 px-4 mt-4 text-xl"
        type="submit"
      >
        {submit}
      </button>
    </form>
  )
}

export default SignUpForm
