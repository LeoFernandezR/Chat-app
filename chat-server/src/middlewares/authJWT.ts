import {RequestHandler} from "express"
import jwt, {JwtPayload} from "jsonwebtoken"
import User from "../models/User"
import config from "../config"

export interface jwtDecode extends JwtPayload {
  id: string
}

const verifyToken: RequestHandler = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"] as string | undefined

    if (authHeader) {
      console.log(authHeader)
      const token = authHeader.split(" ")[1]
      if (token === null) return res.sendStatus(401)

      jwt.verify(token, config.ACCESS_TOKEN_SECRET, (err, decode) => {
        if (err) return res.sendStatus(403)

        req.userId = (decode as jwtDecode).id
      })
      const user = await User.findById(req.userId, {password: 0})
      if (!user) return res.status(404).send("User not found")

      next()
    }
  } catch (err) {
    res.sendStatus(500)
  }
}

export {verifyToken}
