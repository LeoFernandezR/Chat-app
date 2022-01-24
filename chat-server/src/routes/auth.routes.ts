import {Router as newRouter} from "express"
import {signup, login} from "../controllers/auth.controller"
import {noEmptyFields, verifySignUp} from "../middlewares"

const authRoutes = newRouter()

authRoutes.post("/signup", [noEmptyFields, verifySignUp], signup)
authRoutes.post("/login", noEmptyFields, login)

export default authRoutes
