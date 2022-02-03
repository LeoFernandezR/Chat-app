import axios from "axios"

interface newUser {
  username: string
  email: string
  password: string
}

type ErrorCB = (error: string) => void

const api = {
  signup: async (data: newUser, _errorCB?: ErrorCB) => {
    try {
      const res = await axios.post("/api/auth/signup", {
        data,
      })

      return res
    } catch (error) {
      return error
    }
  },
}

export default api
