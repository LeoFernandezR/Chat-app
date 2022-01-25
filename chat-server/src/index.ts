import {httpServer, app} from "./app"
import "./db"

httpServer.listen(app.get("port"), () => {
  console.log(`Listening on port: ${app.get("port")}`)
})
