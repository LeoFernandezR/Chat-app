import {useState} from "react"

const useToken = () => {
  const [token, setToken] = useState(localStorage.getItem("token"))

  const saveToken = async (token: string) => {
    localStorage.setItem("token", `Bearer ${token}`)
    setToken(`Bearer ${token}`)
  }

  return {saveToken, token}
}

export default useToken
