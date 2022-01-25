import {Socket} from "socket.io"

export default (socket: Socket) => {
  console.log(`user has connected: ${socket.id}`)

  socket.on("message", (message) => {
    console.log(message)
  })

  socket.on("disconnect", () => {
    console.log(`user has disconnected: ${socket.id}`)
  })
}
