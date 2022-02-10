import {Router as newRouter} from "express"
import {signup, login} from "../controllers/auth.controller"
import {verifySignUp} from "../middlewares"

const authRoutes = newRouter()

authRoutes.post("/signup", verifySignUp, signup)
authRoutes.post("/login", login)

export default authRoutes
