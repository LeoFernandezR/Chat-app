import {Socket} from "socket.io"
import User from "../models/User"
import config from "../config"
import {ExtendedError} from "socket.io/dist/namespace"
import jwt from "jsonwebtoken"

const authValidation = async (socket: Socket, next: (err?: ExtendedError | undefined) => void) => {
  const authToken = socket.handshake.auth.token

  if (authToken) {
    const token = authToken.split(" ")[1]
    if (token === null) return next(new Error("Not authorized, provide non-null token"))

    let id: string

    try {
      const decode = jwt.verify(token, config.ACCESS_TOKEN_SECRET)
      id = (decode as {id: string; iat: number; exp: number}).id

      if (id) {
        const user = await User.findById(id, {password: 0})
        if (!user) return next(new Error("Not authorized, invalid user"))
      }
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    } catch (error: any) {
      next(new Error(error.message))
    }
    //
    next()
  } else {
    next(new Error("No authorized, no token provided"))
  }
}

export {authValidation}
