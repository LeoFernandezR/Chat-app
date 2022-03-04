import React, {createContext, useEffect, useState} from "react"

import api from "../api"

export interface User {
  _id: string
  username: string
  email: string
  createdAt: string
  updatedAt: string
}
interface AuthContextType {
  login: (token: string) => void
  logout: VoidFunction
  user: User | null
  token: string
  isAuthenticated: boolean
}

// @ts-ignore
export const AuthContext = createContext<AuthContextType>({})

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<AuthContextType["user"]>(null)
  const [token, setToken] = useState(localStorage.getItem("token") ?? "")
  const [isAuthenticated, setIsAuthenticated] = useState(() => token !== "")

  const logout = () => {
    localStorage.removeItem("token")
    setIsAuthenticated(false)
    setToken("")
    setUser(null)
  }

  const login = async (token: string) => {
    if (!token) return

    const authToken = token.includes("Bearer") ? token : `Bearer ${token}`

    localStorage.setItem("token", authToken)

    setToken(authToken)

    try {
      const res = await api.getUserData(authToken)

      setIsAuthenticated(true)
      const loggedUser = res.data.user

      setUser(loggedUser)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      logout()
      setIsAuthenticated(false)
    }
  }

  useEffect(() => {
    setIsAuthenticated(token !== "")
  }, [token])

  useEffect(() => {
    if (!isAuthenticated) return
    login(token)

    return () => {
      logout()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AuthContext.Provider value={{token, login, logout, user, isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}
