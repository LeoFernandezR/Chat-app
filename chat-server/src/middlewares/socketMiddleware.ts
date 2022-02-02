import {Socket} from "socket.io"
import User from "../models/User"
import config from "../config"
import {ExtendedError} from "socket.io/dist/namespace"
import jwt from "jsonwebtoken"

interface IPayload {
  id: string
  iat: number
  exp: number
}

const authValidation = async (socket: Socket, next: (err?: ExtendedError | undefined) => void) => {
  const authToken = socket.handshake.auth.token

  if (!authToken) return next(new Error("No authorized, no token provided"))

  const token = authToken.split(" ")[1]
  if (token === null) return next(new Error("Not authorized, provide non-null token"))

  try {
    const userDecode = jwt.verify(token, config.ACCESS_TOKEN_SECRET) as IPayload

    if (!userDecode.id) return next(new Error("Not authorized, invalid token"))

    const user = await User.findById(userDecode.id, {password: 0})
    if (!user) return next(new Error("Not authorized, user doesn't exists"))
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (error: any) {
    next(new Error(error.message))
  }
  //
  next()
}

export {authValidation}
