import React, {createContext} from "react"

import useAuth from "./hooks/useAuth"
import useToken from "./hooks/useToken"
import useUser, {User} from "./hooks/useUser"

interface IAuthContext {
  token: string | null
  loggedIn: boolean
  saveToken: (token: string) => void
  login: VoidFunction
  logout: VoidFunction
  user: User | undefined
}

// @ts-ignore
export const AuthContext = createContext<IAuthContext>({})

export const AuthProvider: React.FC = ({children}) => {
  const {saveToken, token} = useToken()
  const {loggedIn, login, logout} = useAuth()
  const user = useUser(token, login, logout)

  return (
    <AuthContext.Provider value={{saveToken, token, loggedIn, login, logout, user}}>
      {children}
    </AuthContext.Provider>
  )
}
