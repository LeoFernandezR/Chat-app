import {RequestHandler} from "express"
import jwt from "jsonwebtoken"
import config from "../config"
import User from "../models/User"

const generateToken = (
  payload: {id: string},
  secret: string,
  options?: jwt.SignOptions | undefined,
) => {
  return jwt.sign(payload, secret, {
    expiresIn: 86400,
    ...options,
  })
}

const signup: RequestHandler = async (req, res) => {
  try {
    const {username, email, password} = req.body

    const user = new User({
      username,
      email,
      password: await User.encryptPassword(password),
    })

    const savedUser = await user.save()

    const token = generateToken({id: savedUser._id}, config.ACCESS_TOKEN_SECRET)

    return res.status(201).json({token})
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

const login: RequestHandler = async (req, res) => {
  try {
    const {username, email, password} = req.body

    const searchValue = {username} || {email}

    const userFound = await User.findOne(searchValue)

    if (!userFound) return res.status(404).send("User not found")

    const mathchPassword = User.comparePassword(password, userFound.password)

    if (!mathchPassword) {
      return res.status(401).json({
        token: null,
        message: "Invalid password",
      })
    }

    const token = generateToken({id: userFound._id}, config.ACCESS_TOKEN_SECRET)
    console.log(token)

    return res.status(200).json({token: token})
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

export {signup, login}
