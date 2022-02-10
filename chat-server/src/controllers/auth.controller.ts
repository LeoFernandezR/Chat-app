import {RequestHandler} from "express"
import jwt from "jsonwebtoken"
import config from "../config"
import User from "../models/User"
import {isEmail} from "../utils/isEmail"

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

    if (!username) {
      return res.status(400).json({message: "Username is missing"})
    }

    if (!email) {
      return res.status(400).json({message: "Email is missing"})
    }

    if (!password) {
      return res.status(400).json({message: "Password is missing"})
    }

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
    const {username: searchParam, password}: {username: string; password: string} = req.body

    if (!searchParam) {
      return res.status(400).json({message: "Username or Email is missing"})
    }

    if (!password) {
      return res.status(400).json({message: "Password is missing"})
    }

    const searchParamKey = isEmail(searchParam) ? "email" : "username"

    const userFound = await User.findOne({[searchParamKey]: searchParam})

    if (!userFound) return res.status(404).send("User not found")

    const mathchPassword = User.comparePassword(password, userFound.password)

    if (!mathchPassword) {
      return res.status(401).json({
        token: null,
        message: "Invalid password",
      })
    }

    const token = generateToken({id: userFound._id}, config.ACCESS_TOKEN_SECRET)

    return res.status(200).json({token: token})
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

export {signup, login}
