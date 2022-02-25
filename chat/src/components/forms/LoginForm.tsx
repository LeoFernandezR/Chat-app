import React, {useState} from "react"
import {Icon} from "@iconify/react"
import {useForm, SubmitHandler} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {useNavigate} from "react-router-dom"

import api from "../../api"
import TextField from "../../ui/form/TextField"
import useAuthContext from "../../hooks/useAuthContext"

interface ILoginFormInputs {
  username: string
  password: string
}

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
})

interface Props {}

const LoginForm: React.FC<Props> = () => {
  const {saveToken} = useAuthContext()
  const {
    register,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm<ILoginFormInputs>({
    resolver: yupResolver(schema),
  })

  const navigate = useNavigate()

  const [submitting, setSubmitting] = useState(false)

  const onSubmit: SubmitHandler<ILoginFormInputs> = async (data) => {
    setSubmitting(true)
    try {
      const {token} = await api.login(data)

      saveToken(token)
      setSubmitting(false)
      navigate("/chat")
    } catch (error) {
      const errorMessage = (error as Error).message

      if (errorMessage.includes("username")) {
        return setError("username", {type: "manual", message: errorMessage})
      }
    }
    setSubmitting(false)
  }

  const submit = submitting ? (
    <Icon inline className="inline animate-spin" icon="mdi:loading" />
  ) : (
    "Login"
  )

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        placeholder="username or email"
        type="text"
        {...register("username")}
        error={errors.username?.message}
      />
      <TextField
        password
        placeholder="password"
        {...register("password")}
        error={errors.password?.message}
      />

      <button
        className="bg-pink-400 hover:bg-pink-500 focus:bg-pink-500 outline-none transition-colors duration-300 ease-in rounded-md py-2 px-4 mt-4 text-xl"
        disabled={submitting}
        type="submit"
      >
        {submit}
      </button>
    </form>
  )
}

export default LoginForm
