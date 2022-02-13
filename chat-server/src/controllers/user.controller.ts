import {RequestHandler} from "express"
import User from "../models/User"

export const user: RequestHandler = async (req, res) => {
  const user = await User.findById(req.userId, {password: 0})

  res.json({user})
}
