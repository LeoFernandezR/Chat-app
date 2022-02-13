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

  // const fetchUser = async () => {
  //   if (!token) return logout()

  //   const res = await api.getUserData(token)

  //   login()
  //   setUser(res.data)
  // }

  useEffect(() => {
    if (!token) return logout()

    api.getUserData(token).then((res) => {
      login()
      setUser(res.data)
    })
  }, [token, login, logout])

  return user
}

export default useUser
