import mongoose from "mongoose"
import config from "./config"

const {MONGODB_URI} = config

;(async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI)

    console.log(`Database is connected to: ${db.connection.name}`)
  } catch (err) {
    console.error(err)
  }
})()
