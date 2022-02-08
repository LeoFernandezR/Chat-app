import axios, {AxiosError} from "axios"

export interface newUser {
  username: string
  email: string
  password: string
}

type ErrorCB = (error: string) => void

const api = {
  signup: async (data: newUser, _errorCB?: ErrorCB) => {
    try {
      const res = await axios.post("/api/auth/signup", data)

      return res.data
    } catch (error) {
      const err = (error as AxiosError).response?.data.message

      throw new Error(err)
    }
  },
}

export default api
