import app from "./app"
import "./db"

app.listen(app.get("port"), () => {
  console.log(`Listening on port: ${app.get("port")}`)
})
