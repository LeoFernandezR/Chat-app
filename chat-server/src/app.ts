import express from "express"
import {createServer} from "http"
import {Server} from "socket.io"
import config from "./config"
import cors from "cors"
import authRoutes from "./routes/auth.routes"
import sockets from "./sockets"
import {authValidation} from "./middlewares/socketMiddleware"

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
})

//websocket
io.use(authValidation)
io.on("connection", sockets)

//express variables
app.set("port", config.PORT)

//express middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use("/api/auth", authRoutes)

export {httpServer, app}
