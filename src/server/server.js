import express from "express"
import serveStatic from "serve-static"
import bodyParser from "body-parser"
import * as globalHandler from "./routes/global-handlers"
import routes from "./routes"
import debug from "debug"
import config, { cleanConfig } from "./config/config-loader"

export const app = express()
const log = debug("server")
let server

export function start() {
    return new Promise((resolve) => {
        server = app.listen(config.PORT, () => {
            log(`Ready @ localhost:${config.PORT}`, cleanConfig)
            resolve()
        })
    })
}

export function stop() {
    return new Promise((resolve) => {
        if (server) {
            server.close()
        }

        resolve()
    })
}

// settings
app.set("view engine", "pug")
app.set("views", "./resources/views")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// static files
app.use(serveStatic("public"))

// routes
app.use("/", routes)

// error handler
app.use(globalHandler.error)

// 404 handler
app.use(globalHandler.notFound)

// get the party started
if (!config.NODE_ENV.includes("test")) {
    start()
}
