import axios, {AxiosError} from "axios"

export interface loginUser {
  username: string
  password: string
}
export interface newUser extends loginUser {
  password: string
  confirmPassword: string
}

const api = {
  signup: async (data: newUser) => {
    try {
      const res = await axios.post("/api/auth/signup", data)

      return res.data
    } catch (error) {
      const err = (error as AxiosError).response?.data.message

      throw new Error(err)
    }
  },
  login: async (data: loginUser) => {
    try {
      const res = await axios.post("/api/auth/login", data)

      return res.data
    } catch (error) {
      const err = (error as AxiosError).response?.data.message

      throw new Error(err)
    }
  },
}

export default api
