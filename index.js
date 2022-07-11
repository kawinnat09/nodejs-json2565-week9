const http = require('http')
const msg = require('./message.js')

const host = "localhost"
const PORT = process.env.PORT || 5000
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type':'text/plain' })
    res.write(`${msg.message} I Like Football`)
    res.end()
})

server.listen(PORT, () => {
    console.log(`Strat server running at http://${host}:${PORT}`)
})