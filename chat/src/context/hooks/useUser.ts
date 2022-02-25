import {useState, useEffect} from "react"

import api from "../../api"

export interface User {
  _id: string
  username: string
  email: string
  createdAt: string
  updatedAt: string
}

const useUser = (token: string | null, login: VoidFunction, logout: VoidFunction) => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    if (!token) return logout()

    api
      .getUserData(token)
      .then((res) => {
        login()
        setUser(res.data.user)
      })
      .catch((err) => {
        logout()
        // eslint-disable-next-line no-console
        console.error(err)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  return user
}

export default useUser
