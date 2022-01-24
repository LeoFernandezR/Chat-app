import {RequestHandler} from "express"
import jwt from "jsonwebtoken"
import User from "../models/User"
import config from "../config"

const verifyToken: RequestHandler = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"]

    if (authHeader) {
      const token = authHeader.split(" ")[1]
      if (token === null) return res.sendStatus(401)

      jwt.verify(token, config.ACCESS_TOKEN_SECRET, (err, userId) => {
        if (err) return res.sendStatus(403)
        req.userId = String(userId)
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
