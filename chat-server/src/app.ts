import express from "express"
import config from "./config"
import cors from "cors"
import authRoutes from "./routes/auth.routes"
const app = express()

app.set("port", config.PORT)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use("/api/auth", authRoutes)

export default app
