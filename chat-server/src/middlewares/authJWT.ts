import {RequestHandler} from "express"
import jwt, {JwtPayload} from "jsonwebtoken"
import User from "../models/User"
import config from "../config"

export interface jwtDecode extends JwtPayload {
  id: string
}

const verifyToken: RequestHandler = async (req, res, next) => {
  const authHeader = req.headers["authorization"] as string | undefined

  if (authHeader) {
    const token = authHeader.split(" ")[1]
    if (token === null) return res.sendStatus(401)

    try {
      const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET)

      req.userId = (decoded as jwtDecode).id
    } catch (error) {
      return res.sendStatus(403)
    }

    try {
      const user = await User.findById(req.userId, {password: 0})
      if (!user) return res.status(404).send("User not found")
    } catch (err) {
      return res.sendStatus(500)
    }
    next()
  }
}

export {verifyToken}
