import {useState} from "react"

const useToken = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"))

  const saveToken = (token: string) => {
    localStorage.setItem("token", token)
    setToken(token)
  }

  return {saveToken, token}
}

export default useToken
