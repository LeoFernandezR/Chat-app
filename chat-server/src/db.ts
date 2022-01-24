import mongoose from "mongoose"
import config from "./config"

const {DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USERNAME} = config

;(async () => {
  try {
    const db = await mongoose.connect(
      `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}?retryWrites=true&w=majority`,
    )

    console.log(`Database is connected to: ${db.connection.name}`)
  } catch (err) {
    console.error(err)
  }
})()
