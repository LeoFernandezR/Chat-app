import React from "react"
import {SubmitHandler, useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

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

import TextField from "../../ui/form/TextField"
import api from "../../api"
interface Props {}

const SignUpForm: React.FC<Props> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<ISignUpFormInputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<ISignUpFormInputs> = async (data) => {
    try {
      // const res = await api.signup(data)
    } catch (error) {
      console.error((error as Error).message)
    }
  }

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
        Sign up
      </button>
    </form>
  )
}

export default SignUpForm
