import {BrowserRouter, Route, Routes} from "react-router-dom"

import Chat from "./pages/Chat"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Footer from "./ui/layout/Footer"
import Navbar from "./ui/layout/Navbar"

function App() {
  return (
    <div className="bg-stone-900 text-white flex flex-col h-full min-h-screen">
      <BrowserRouter>
        <Navbar />
        <div className="container mx-auto px-4 flex-1">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<SignUp />} path="/signup" />
            {/* Down should be a private route */}
            <Route element={<Chat />} path="/chat" />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
