import {RequestHandler} from "express"
import User from "../models/User"

const verifySignUp: RequestHandler = async (req, res, next) => {
  try {
    const {username, email} = req.body

    const userExists = await User.findOne({username})
    if (userExists) return res.status(400).json({message: "The username already exists"})

    const emailExists = await User.findOne({email})
    if (emailExists) return res.status(400).json({message: "The email already exists"})

    next()
  } catch (error) {
    console.error(error)
    return res.sendStatus(500)
  }
}

const noEmptyFields: RequestHandler = (req, res, next) => {
  const {username, email, password} = req.body

  if (!username || !email || !password) {
    return res.status(400).json({message: "No empty fields"})
  }

  next()
}

export {verifySignUp, noEmptyFields}
