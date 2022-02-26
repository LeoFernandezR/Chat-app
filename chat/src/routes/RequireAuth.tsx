import {Navigate, Outlet, useLocation} from "react-router-dom"

import useAuthContext from "../hooks/useAuthContext"

const RequireAuth = () => {
  const {isAuthenticated} = useAuthContext()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate replace state={{from: location}} to="/login" />
  }

  return <Outlet />
}

export default RequireAuth
