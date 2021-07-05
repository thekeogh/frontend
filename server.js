const { createServer } = require("https")
const { parse } = require("url")
const { readFileSync } = require("fs")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer({
    cert: readFileSync("./ssl/cert.pem"),
    key: readFileSync("./ssl/key.pem"),
  }, (req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(3000, (err) => {
    if (err) throw err
    console.log("> Ready on https://localhost:3000")
  })
})