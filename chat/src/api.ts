import axios, {AxiosError} from "axios"

export interface loginUser {
  username: string
  password: string
}
export interface newUser extends loginUser {
  password: string
  confirmPassword: string
}

const throwErorr = (error: unknown) => {
  const err = (error as AxiosError).response?.data.message

  throw new Error(err)
}

const api = {
  signup: async (data: newUser) => {
    try {
      const res = await axios.post("/api/auth/signup", data)

      return res.data
    } catch (error) {
      return throwErorr(error)
    }
  },
  login: async (data: loginUser) => {
    try {
      const res = await axios.post("/api/auth/login", data)

      return res.data
    } catch (error) {
      return throwErorr(error)
    }
  },
  getUserData: async (token: string) => {
    try {
      const res = await axios.get("/api/user", {
        headers: {
          Authorization: token,
        },
      })

      return res
    } catch (error) {
      return throwErorr(error)
    }
  },
}

export default api
