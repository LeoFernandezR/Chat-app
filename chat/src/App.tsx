import {BrowserRouter, Route, Routes} from "react-router-dom"

import Chat from "./pages/Chat"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import RequireAuth from "./routes/RequireAuth"
import Layout from "./ui/layout/Layout"
import LayoutChat from "./ui/layout/LayoutChat"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<Home />} />
          <Route element={<Login />} path="login" />
          <Route element={<SignUp />} path="signup" />
        </Route>

        <Route element={<RequireAuth />}>
          <Route element={<LayoutChat />} path="/chat">
            <Route index element={<Chat />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
