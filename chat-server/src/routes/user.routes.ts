import {Router as newRouter} from "express"
import {user} from "../controllers/user.controller"
import {verifyToken} from "../middlewares"

const userRoutes = newRouter()

userRoutes.get("/", verifyToken, user)

export default userRoutes
