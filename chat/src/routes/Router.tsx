import {BrowserRouter, Route, Routes} from "react-router-dom"

import {Chat, Home, Login, SignUp} from "../pages"
import Layout from "../components/commons/layout/Layout"

import RequireAuth from "./RequireAuth/RequireAuth"

const Router = ({}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<Home />} />
          <Route element={<Login />} path="login" />
          <Route element={<SignUp />} path="signup" />
        </Route>

        <Route element={<RequireAuth />}>
          <Route element={<Chat />} path="/chat" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
