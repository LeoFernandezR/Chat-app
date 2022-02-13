import {useState} from "react"

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const login = () => {
    setLoggedIn(true)
  }

  const logout = () => {
    localStorage.removeItem("token")
    setLoggedIn(false)
  }

  return {loggedIn, login, logout}
}

export default useAuth
